package nosql.zkh.backend.services;

import org.springframework.data.neo4j.core.DatabaseSelectionProvider;
import org.springframework.data.neo4j.core.Neo4jClient;
import org.springframework.stereotype.Service;

import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.HashMap;
import java.util.Arrays;

@Service
public class BackupService {

    private final Neo4jClient neo4jClient;
    private final DatabaseSelectionProvider databaseSelectionProvider;

    public BackupService(Neo4jClient neo4jClient, DatabaseSelectionProvider databaseSelectionProvider) {
        this.neo4jClient = neo4jClient;
        this.databaseSelectionProvider = databaseSelectionProvider;
    }

    public void importData(){
        neo4jClient.query("MATCH ()-[r]-() DELETE r;" )
                .in(databaseSelectionProvider.getDatabaseSelection().getValue()).run();
        neo4jClient.query("MATCH (n) DELETE n;" )
                .in(databaseSelectionProvider.getDatabaseSelection().getValue()).run();
        neo4jClient.query("CALL apoc.import.graphml(\"http://backend:9334/import/data\", {batchSize: 10000, readLabels: true})")
                .in(databaseSelectionProvider.getDatabaseSelection().getValue())
                .run();
    }
    public String exportData() {
        return neo4jClient.query("CALL apoc.export.graphml.all(null, {stream:true, useTypes:true})" +
                " YIELD file, nodes, relationships, properties, data as data" +
                " RETURN nodes, relationships, properties, data")
                .in(databaseSelectionProvider.getDatabaseSelection().getValue())
                .fetch()
                .one()
                .orElse(new HashMap<>())
                .get("data").toString();
    }
    public void saveData(String data) {
        try(FileWriter writer = new FileWriter("/usr/local/lib/db.graphml", false)) {
            writer.write(data);
        }
        catch(IOException ex){
            System.out.println(ex.getMessage());
        }
    }

    public String readData(){
        StringBuilder data = new StringBuilder();
        try(FileReader reader = new FileReader("/usr/local/lib/db.graphml"))
        {
            char[] buf = new char[256];
            int c;
            while((c = reader.read(buf))>0){
                if(c < 256){
                    buf = Arrays.copyOf(buf, c);
                }
                data.append(buf);
            }
        }
        catch(IOException ex){
            System.out.println(ex.getMessage());
        }
        return data.toString();
    }
}

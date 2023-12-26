package nosql.zkh.backend.component;

import nosql.zkh.backend.services.BackupService;
import nosql.zkh.backend.utils.LoadQuery;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.data.neo4j.core.DatabaseSelectionProvider;
import org.springframework.data.neo4j.core.Neo4jClient;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.concurrent.TimeUnit;

@Component
public class RunAfterStartApp {
    private final Neo4jClient neo4jClient;

    private final BackupService backupService;
    private final DatabaseSelectionProvider databaseSelectionProvider;
    public RunAfterStartApp(Neo4jClient neo4jClient, BackupService backupService, DatabaseSelectionProvider databaseSelectionProvider) throws InterruptedException {
        this.backupService = backupService;
        TimeUnit.SECONDS.sleep(15);
        this.neo4jClient = neo4jClient;
        this.databaseSelectionProvider = databaseSelectionProvider;
    }

    @EventListener(ApplicationReadyEvent.class)
    public void runAfterStarApp() throws InterruptedException {
        TimeUnit.SECONDS.sleep(15);
        if(!existEntity()){
            this.backupService.importData();
        }
    }
    private String database() {
        return databaseSelectionProvider.getDatabaseSelection().getValue();
    }

    private boolean existEntity(){
        return Integer.parseInt(this.neo4jClient
                .query(LoadQuery.load("/usr/local/lib/check.cypher"))
                .in(database())
                .fetch()
                .one().orElse(new HashMap<>())
                .get("count")
                .toString()) > 0;

    }
}

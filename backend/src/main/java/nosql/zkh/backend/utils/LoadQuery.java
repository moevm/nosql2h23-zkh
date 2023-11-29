package nosql.zkh.backend.utils;

import org.springframework.util.ResourceUtils;

import java.io.*;
import java.util.Scanner;

public class LoadQuery {
    public static String load(String path){
        String query = "";
        try {
            Scanner scanner = new Scanner(ResourceUtils.getFile(path));
            query = scanner.useDelimiter("\n").next();
            scanner.close();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return query;
    }
}

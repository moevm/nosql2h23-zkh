package nosql.zkh.backend.controllers;

import nosql.zkh.backend.services.BackupService;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class BackupController {
    private final BackupService backupService;

    public BackupController(BackupService backupService) {
        this.backupService = backupService;
    }

    @PostMapping("/import")
    public void importData(@RequestBody String body){
        backupService.saveData(body);
        backupService.importData();
    }
    @GetMapping("/export")
    public String exportData(){
        return backupService.exportData();
    }
}

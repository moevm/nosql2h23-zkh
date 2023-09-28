import { Component } from '@angular/core';
import { BasicService } from '../basic.service';
@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent {
  protected msg: string = '';
  constructor(private service: BasicService) {

  }
  ngOnInit(){
    this.Init()
    console.log(2);
  }
  private Init() {
    this.service.getHello().subscribe((message: any) => {
      this.msg=message.ans;
    })
  }
}

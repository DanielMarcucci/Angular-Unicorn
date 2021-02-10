import { Component, OnInit } from '@angular/core';
import { Unicorn } from 'src/app/models/Unicorn';
import { UnicornService } from '../../services/unicorn.service'

@Component({
  selector: 'app-unicorn-list',
  templateUrl: './unicorn-list.component.html',
  styleUrls: ['./unicorn-list.component.css']
})
export class UnicornListComponent implements OnInit {

  unicorns: Unicorn[] = []

  constructor(private unicornService: UnicornService) { }

  ngOnInit(): void {
    this.getUnicorns()
  }

  getUnicorns() {
    this.unicornService.getUnicorns().subscribe(
      (res: Unicorn[]) => {
        console.log(res)
        this.unicorns = res
      },
      err => console.error(err)
    )
  }

  deleteUnicorn(id: number) {
    this.unicornService.deleteUnicorn(id).subscribe(
      _ => {
        this.unicorns = this.unicorns.filter(item => item.id != id)
        // this.getUnicorns()
      },
      err => console.error(err)
    )
  }
}

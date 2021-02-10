import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { Unicorn } from 'src/app/models/Unicorn';
import { UnicornService } from 'src/app/services/unicorn.service';

@Component({
  selector: 'app-unicorn-form',
  templateUrl: './unicorn-form.component.html',
  styleUrls: ['./unicorn-form.component.css']
})
export class UnicornFormComponent implements OnInit {

  @HostBinding('class') classes = 'row'

  unicorn: Unicorn = {
    id: 0,
    title: '',
    body: '',
    userId: 0
  }

  isEdit: boolean = false

  constructor(
    private unicornService: UnicornService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params

    if (params.id) {
      this.unicornService.getUnicorn(params.id).subscribe(
        res => {
          this.unicorn = res,
          this.isEdit = true
        },
        err => console.error(err)
      )
    }
  }

  saveNewUnicorn() {
    console.log("save")
    delete this.unicorn.id
    this.unicornService.saveUnicorn(this.unicorn).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/unicorns'])
      },
      err => console.error(err)
    )
  }

  updateUnicorn() {
    console.log("update")
    this.unicornService.updateUnicorn(this.unicorn.id, this.unicorn).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/unicorns'])
      },
      err => console.error(err)
    )
  }
}

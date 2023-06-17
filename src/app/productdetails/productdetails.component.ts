import { Component, OnInit } from '@angular/core';
import { Juiceslist } from '../Models/juiceslist';
import { ActivatedRoute, Router } from '@angular/router';
import { JuiceslistserviceService } from '../Services/juiceslistservice.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css'],
})
export class ProductdetailsComponent implements OnInit {
  details!: Juiceslist;

  constructor(
    private activatedRoute: ActivatedRoute,
    private juicelistservices: JuiceslistserviceService,
    private router: Router
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.details = juicelistservices.getJuicelistId(params['id']);
      }
    });
  }

  ngOnInit(): void {}
}

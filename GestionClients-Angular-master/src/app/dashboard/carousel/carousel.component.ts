import { Component, OnInit } from '@angular/core';
import { RouteDetectorService } from 'src/app/shared/services/route-detector.service';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images = [
    {path: `https://media.gettyimages.com/id/525660553/photo/tunis-landmark.jpg?s=2048x2048&w=gi&k=20&c=QxLxkLVPqEjbnsGL8ETtCLi9W2S_JUmGb-3-6bF98sE=`,city: 'Tunis',},
    {path: `https://media.gettyimages.com/id/518250521/photo/sidi-bou-said-carthago-tunis-tunisia.jpg?s=2048x2048&w=gi&k=20&c=p2Gz8m4kQY8BFTCy0zaetcTQ9pL1lB2XRLUrLUV8kt4=`,city: 'Tunis',},
    {path: `https://media.gettyimages.com/id/1295276552/photo/monastir-panorama.jpg?s=2048x2048&w=gi&k=20&c=e7MqLemarcMWlLwMkVeAeiJAkAizUmR9xh15uqTLMsg=`, city: 'Tunis',},
    {path: `https://media.gettyimages.com/id/184353834/photo/white-houses-in-hammamet.jpg?s=2048x2048&w=gi&k=20&c=409k274eLXvceRsWUE8-c9zXCOSs77QZruEj5Q4z89Q=`, city: 'Tunis',},
    {path: `https://media.gettyimages.com/id/1227785324/photo/%C3%A2hammamet-nights-2020-in-tunisia.jpg?s=2048x2048&w=gi&k=20&c=UGyTVMTu5RDWNNSVbz3BvCsTAryHEnMPotV8bk_XiC0=`,city: 'Tunis',},
    {path: `https://media.gettyimages.com/id/184290937/photo/hammamet-bech.jpg?s=2048x2048&w=gi&k=20&c=gVMJWf1_82WRxbs-W_Wzg2-k7rBODJnQty05swJJ6Xg=`, city: 'Tunis',},
    {path: 'https://www.tunisiatourism.info/uploads/editor/35148569-1611001644.jpg', city: 'Tunis'}
  ];

  constructor(private routeDetector: RouteDetectorService) { }

  ngOnInit(): void {
    this.routeDetector.setURL('dashboard')
  }

}

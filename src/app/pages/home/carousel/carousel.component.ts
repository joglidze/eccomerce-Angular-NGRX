import { Component } from "@angular/core";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"],
})
export class CarouselComponent {
  array = [
    "https://cdn.ecommercedns.uk/files/9/232819/0/9490480/farm-bros-swampmaster-no-sweat-banner.jpg",
    "https://cdn.ecommercedns.uk/files/9/232819/5/24232935/farmbros-banner.png",
    "https://cdn.ecommercedns.uk/files/9/232819/9/21440669/10-off-2.jpg",
  ];
}

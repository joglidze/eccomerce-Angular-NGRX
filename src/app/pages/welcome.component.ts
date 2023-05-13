import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { login } from "./auth/store/auth.action";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.scss"],
})
export class WelcomeComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit() {
    const profile = localStorage.getItem("user");

    if (profile) {
      this.store.dispatch(login({ user: JSON.parse(profile) }));
    }
  }
  array = [1, 2, 3, 4];
}

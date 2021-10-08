import { Component } from "@angular/core";

@Component({
  selector: "app-danger-alert",
  templateUrl: "./danger-alert.component.html",
  styleUrls: ["./danger-alert.component.scss"]
})
export class DangerAlertComponent {
  public message = "This is an danger alert!";
}

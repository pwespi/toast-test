import { Component, h, State } from "@stencil/core";
import { Plugins } from "@capacitor/core";
const { Toast } = Plugins;

@Component({
  tag: "app-home",
  styleUrl: "app-home.css"
})
export class AppHome {
  @State() time = 0;
  interval: number = null;

  async openToast(duration?: "short" | "long") {
    this.startTime();
    await Toast.show({
      text: duration ? duration : "undefined",
      duration
    });
  }

  startTime() {
    clearInterval(this.interval);
    this.time = 0;
    const start = new Date().getTime();
    this.interval = setInterval(() => {
      this.time = new Date().getTime() - start;
    }, 20);
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <ion-button onClick={() => this.openToast()}>Undefined</ion-button>
        <ion-button onClick={() => this.openToast("short")}>Short</ion-button>
        <ion-button onClick={() => this.openToast("long")}>Long</ion-button>
        <div>Time: {this.time / 1000}</div>
      </ion-content>
    ];
  }
}

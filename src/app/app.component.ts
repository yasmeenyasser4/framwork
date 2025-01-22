import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { AboutComponent } from "./about/about.component";
import { StartComponent } from "./start/start.component";
import { FooterComponent } from "./footer/footer.component";
import { ContactComponent } from "./contact/contact.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, AboutComponent, StartComponent, FooterComponent, ContactComponent, PortfolioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fremWark';
}

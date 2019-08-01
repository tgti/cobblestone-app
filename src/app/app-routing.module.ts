import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    loadChildren: "./pages/home/home.module#HomePageModule"
  },
  {
    path: "current-deals",
    loadChildren: "./pages/current-deals/current-deals.module#CurrentDealsPageModule"
  },
  {
    path: "services",
    children: [
      {
        path: ":service",
        loadChildren:
          "./pages/services-page/services-page.module#ServicesPagePageModule"
      }
    ]
  },
  {
    path: "locations",
    loadChildren: "./pages/locations/locations.module#LocationsPageModule"
  },
  {
    path: "text-club",
    loadChildren: "./pages/text-club/text-club.module#TextClubPageModule"
  },
  {
    path: "favorites",
    loadChildren: "./pages/favorites/favorites.module#FavoritesPageModule"
  },
  {
    path: "feedback",
    loadChildren: "./pages/feedback/feedback.module#FeedbackPageModule"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

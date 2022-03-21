import { Injectable } from '@angular/core';

import WebMap from '@arcgis/core/WebMap';
import MapView from '@arcgis/core/views/MapView';
import Bookmarks from '@arcgis/core/widgets/Bookmarks';
import Expand from '@arcgis/core/widgets/Expand';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  public view: MapView | null = null;

  constructor() {}

  async createMap(container: HTMLDivElement) {
    const webmap = new WebMap({
      portalItem: {
        id: 'aa1d3f80270146208328cf66d022e09c'
      }
    });

    const view = new MapView({
      container,
      map: webmap
    });

    // const bookmarks = new Bookmarks({
    //   view,
    //   // allows bookmarks to be added, edited, or deleted
    //   editingEnabled: true
    // });
    //
    // const bkExpand = new Expand({
    //   view,
    //   content: bookmarks,
    //   expanded: true
    // });
    //
    // // Add the widget to the top-right corner of the view
    // view.ui.add(bkExpand, 'top-right');

    // bonus - how many bookmarks in the webmap?
    webmap.when(() => {
      if (webmap.bookmarks && webmap.bookmarks.length) {
        console.log('Bookmarks: ', webmap.bookmarks.length);
      } else {
        console.log('No bookmarks in this webmap.');
      }
    });

    this.view = view;
    return this.view.when();
  }

  destroyMap(): void {
    if (this.view) {
      // destroy the map view
      this.view.destroy();
    }
  }

}

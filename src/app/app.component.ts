import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'ag-grid-enterprise/main';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Data table.';
  private gridApi;
  private gridColumnApi;
  public columnDefs;
  public sortingOrder;

  constructor(
    private http: HttpClient,
  ) {

    this.columnDefs = [
      {
        headerName: 'User Id',
        field: 'userId',
        width: 100,
        sortingOrder : ['asc', 'desc'],
        lockPosition: true,
        suppressNavigable: true,
        rowDrag: true
      },
      {
        headerName: 'Id',
        field: 'id',
        width: 80,
        sortingOrder : ['asc', null]
      },
      {
        headerName: 'Title',
        field: 'title',
        width: 300,
        rowDrag: true
      },
      {
        headerName: 'Description',
        field: 'body',
        width: 300,
      }
  ];
  // default sorting
  this.sortingOrder = ['desc', 'asc', null];
}// end: constructor

  // the function of agGrid
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
   // fetching data from rest API
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      data => {
        // setting the data into table
        params.api.setRowData(data);
      }
    );
  }// end: onGridReady
  // get data
  getData() {
     var rowNode = this.gridApi.getDisplayedRowAtIndex(0);
     alert(rowNode.data.title);
  }
  // exporting the data
    onBtExport() {
      debugger;
      let params = {
      skipHeader: false,
      allColumns: true,
      fileName: 'Report.csv'
    };
      this.gridApi.exportDataAsCsv(params);
    } // endL export button

}// end: export

# Dataset uploads

In the machine learning world, a dataset is just a collection of data, like a table or a spreadsheet. In order to get your own data into your Kobra project, you'll need to upload them.

## Export from a program

Kobra uses the industry-standard CSV format for dataset imports (we support TSV and other variants too). Most spreadsheet programs have an option to export a CSV file; here's instructions for the most popular programs.

### Google Sheets

To export a CSV file, select the sheet you want to export, then go to File -> Download -> Comma-separated values (.csv, current sheet). The file will download to your computer.

![Screenshot showing menus used to export CSV file from Google Sheets](/export-csv-google-sheets.png)

### Microsoft Excel

First, click the File tab in the upper left corner:

![Screenshot showing file menu in Microsoft Excel](/export-csv-excel-0.png)

Then, click "Save As," then select "Browse":

![Screenshot showing save as menu in Microsoft Excel](/export-csv-excel-1.png)

Then, select the "Save as type" dropdown in the resulting dialog box, then choose "CSV (Comma delimited) (*.csv)." Proceed with saving the file as you normally would.

![Screenshot showing save dialog with save as type dropdown open in Microsoft Excel](/export-csv-excel-2.png)

Excel will show a warning about possible data loss:

![Screenshot showing warning in Microsoft Excel: POSSIBLE DATA LOSS: Some features might be lost if you save this workbook in the comma-delimited (.csv) format. To preserve these features, save it in an Excel file format.](/export-csv-excel-3.png)

If you want to keep any other sheets or any formatting in your spreadsheet, click the "Save As..." button in the warning message, and save the file normally. You'll still need the CSV to upload to Kobra.

## Import into Kobra

First, click the Datasets tab in the upper left panel:

![Screenshot showing Datasets tab button](/upload-dataset-1.png)

Then, drag a file onto the panel or click the text to select a file with a dialog:

![Screenshot showing Datasets tab contents: Drop your files here! Or click here to upload](/upload-dataset-2.png)

Kobra will upload your dataset and display it in the panel. It will also open the DataFrames tab of the toolbox, showing the block that corresponds to the dataset:

![Screenshot showing full Kobra UI, with a dataset showing in the Datasets panel and the DataFrames tab of the toolbox open, with an as DataFrame block at the top in a section labeled Uploaded datasets](/upload-dataset-3.png)

You can then drag that block out to the workspace to use the data as a DataFrame.

## Editing a dataset

To edit a dataset, click the edit button next to the dataset name in the Datasets panel:

![Screenshot showing section of Datasets panel labeled Uploaded datasets with the edit button next to a dataset highlighted](/edit-dataset-1.png)

This will open a dialog with a spreadsheet-style editor. Use this to edit the dataset, then click "Save" when you are done. You can close the dialog at any time and your changes will not be saved.

![Screenshot showing dialog box titled Edit dataset with a spreadsheet widget in the middle and save and close buttons at the bottom](/edit-dataset-2.png)
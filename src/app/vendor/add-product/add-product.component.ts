import { Component, OnInit } from '@angular/core';
import {FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
const URL = 'http://localhost:2020/products/upload';
import {ServerCallService} from '../../shared/services/server-call.service'
import {SharedService} from '../../shared/services/shared.service'
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  isEdit:boolean=false;
  dateTime:any;
  constructor(private shared:SharedService,private serverCall:ServerCallService) { 
      this.shared.fnSetProductInfoSubscribe((data)=>{
        this.isEdit=true;  
        this.postData=data;
        this.dateTime=new Date().getTime();
      })
  }

  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
  postData:any={};
  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      this.postData={};
      document.querySelector('[type=file]')['value']='';
      this.uploader.queue=[];  
      this.shared.fnSetMessage({
           'msg':'Successfully Done',
           'bg':'green'
         })
         if(this.isEdit){
          let _ele: HTMLElement = document.querySelector('.menu > a:nth-child(3)')
          _ele.click();
         }
     };
 }

 fnFindExt(fileInfo){
  let extention=fileInfo.name.split('.').pop();
  if(extention != 'jpg'){
    alert('please upload .jpg files only');
    return false;
  }
  return true;
 }

 fnAddProduct(){
     let fileInfo=this.uploader.queue[0].file;
     let isJpg=this.fnFindExt(fileInfo);
     if(isJpg){
      let userInfo=JSON.parse(sessionStorage.getItem('userInfo'));
      this.postData.vendorName=userInfo.userName;
      this.serverCall.post('products/addProduct',{'data':this.postData},(res)=>{
      debugger;
      if(res){
          this.uploader.queue[0].file.name=res._id +'.jpg';
          this.uploader.queue[0].upload();
        }
     },(res)=>{
      debugger
     })
 }
}

fnUpdateProdcutDet(hasFile){
  this.serverCall.post('products/updateProduct',this.postData,(res)=>{
    if(hasFile && res.ok == 1){
      this.uploader.queue[0].file.name=this.postData._id +'.jpg';
      this.uploader.queue[0].upload();
    }else{
       this.postData={};
       this.shared.fnSetMessage({
        'msg':'Successfully Done',
        'bg':'green'
      })
       let _ele: HTMLElement = document.querySelector('.menu > a:nth-child(3)')
       _ele.click();
    }
  },(res)=>{
    this.shared.fnSetMessage({
      'msg':'Something went wrong',
      'bg':'red'
    })
  })
}

fnEditProduct(){
  let fileInfo=this.uploader.queue[0] && this.uploader.queue[0].file;
 
  if(fileInfo){
    let isJpg=this.fnFindExt(fileInfo);
    if(isJpg){
      this.fnUpdateProdcutDet(true);
    }
  }else{
    this.fnUpdateProdcutDet(false);
  }
  
}

}

import { Component, OnInit } from '@angular/core';
import { QuillEditorComponent } from 'ngx-quill';
import { Observable, observable, of, Subscription } from 'rxjs';
import { Howl, Howler } from 'howler';
import { delay, map, tap } from 'rxjs/operators';
// import * as pegjs from 'pegjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  _quillSubscription: Subscription;
  _quillInstance: any;
  constructor() {
    // this._quillSubscription = quillEditor.onEditorCreated.subscribe((event) => this.quillEditorCreated(event));
  }

  editorStyle = {
    height: '200px'
  };

  created($event) {

    //spegjs.parser

    console.log($event);
    // this._quillInstance = $event;
    document.querySelector('.ql-link').parentElement.classList.add("ramin");

  }


  config = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],

      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction

      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],

      ['clean'],                                         // remove formatting button

      ['link', 'image', 'video']                         // link and image, video
    ]
  };

  $loading: Observable<boolean> = of(true);
  ngOnInit(): void {

    this.$loading.pipe(
    //  tap(s=>console.log('s1', s)),
      delay(2000),

      map(s => !s),
     // tap(s=>console.log('s2', s)),
    ).subscribe(loading => {

     // console.log('s3', loading);
      this.$loading = of(loading);
    });

    //throw new Error("Method not implemented.");

    // let sound = new Howl({
    //   src: ['https://cdns-preview-8.dzcdn.net/stream/c-837189582badf324936b245530f9637b-3.mp3']
    //     });

    //  sound.play()



  }
  title = 'noteApp';

}

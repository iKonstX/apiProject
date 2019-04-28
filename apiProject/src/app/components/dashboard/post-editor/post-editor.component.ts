import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { HttpClient, HttpHeaders, HttpInterceptor } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.css', '../dashboard.component.css']
})
export class PostEditorComponent implements OnInit {
  public Editor = ClassicEditor;
  public user = JSON.parse(localStorage.getItem("ngSession")).name;
  public sessionKey = JSON.parse(localStorage.getItem("ngSession")).session;
  public model = {
    editorData: `<p>What\'s on your mind, ${this.user}?</p>`
  };
  constructor(private toastr: ToastrService, private http: HttpClient) { }

  ngOnInit() {
  }

  sendPost() {
    return this.http.post("http://localhost:3000/posts", JSON.stringify({ session: this.sessionKey, message: this.model.editorData }),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json'),
        observe: 'response'
      }).subscribe(success => {
        this.toastr.success("Your post  has been submitted successfully")
      },
        error => {
          this.toastr.error("Error while submitting post.")
        });
  }

  onFocus({ editor }: ChangeEvent) {
    editor.setData("")
  }

}

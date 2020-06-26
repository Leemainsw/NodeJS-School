### File Upload Form
```html
<form method="post" action="/Upload" enctype="multipart/form-data">
    <input type="file" name="userfile">
    <input type="submit" value="파일업로드">
```

### File 속성  
참고 : [링크]('https://github.com/expressjs/multer')
Key | Description | Note
--- | --- | ---
`fieldname` | Field name specified in the form |
`originalname` | Name of the file on the user's computer |
`encoding` | Encoding type of the file |
`mimetype` | Mime type of the file |
`size` | Size of the file in bytes |
`destination` | The folder to which the file has been saved | `DiskStorage`
`filename` | The name of the file within the `destination` | `DiskStorage`
`path` | The full path to the uploaded file | `DiskStorage`
`buffer` | A `Buffer` of the entire file | `MemoryStorage`

### File 동일한 파일을 올릴 때 
처리방법  
1. 덮어쓰기
2. filename(1).jpg
3. filename+날짜


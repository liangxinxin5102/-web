
```
<!DOCTYPE HTML>
<html>

<head>
    <meta charset="utf-8">
    <title>img的src、alt和title属性</title>
</head>

<body>
    相对路径、有title：<img src="images/boy.png" title="小朋友学习"><br>
    绝对路径：<img src="images/profile.png" alt="用户"><br>
    图像URL错误显示alt：<img src="boy.png" alt="小朋友学习">
</body>

</html>
```

```
<!DOCTYPE HTML>
<html>

<head>
    <meta charset="utf-8">
    <title>img的width和height属性</title>
</head>

<body>
    <!-- 不设置宽、高，则显示缺省尺寸：140px*180px -->
    <img src="images/boy.png" border="2" />
    <!-- <br>按比例缩小到：42px*54px -->
    <img src="images/boy.png" border="2" width="42px" height="54px" />
    <!-- <br>按父容器宽度百分比缩放：30% -->
    <img src="images/boy.png" border="2" height="1%" />
    <!-- <br>不按比例缩放：250px*80px -->
    <img src="images/boy.png" border="2" width="250px" height="80px" />
</body>

</html>
```

```
<!DOCTYPE HTML>
<html>

<head>
    <meta charset="utf-8">
    <title>img的align属性</title>
    <style>
        h2{
        background: #dddddd;
        }
        p{background: #dddddd;}
    </style>
</head>

<body>
    <h2>默认底部bottom<img src="images/home.png" width="70">align</h2>
    <h2>居中middle<img src="images/home.png" align="middle" width="70">align</h2>
    <h2>顶部top<img src="images/home.png" align="top" width="70">align</h2>
    <p><img src="images/home.png" align="left"  hspace="25px" vspace="15px">注意：不同的浏览器以及同一浏览器的不同版本对 align 属性的某些值的处理方式是不同的。<img src="images/home.png" align="right" width="70">注意：HTML 4.01 不推荐使用 align 属性，XHTML 1.0 Strict DTD 不支持该属性，同时 HTML 5 也不再支持该属性。</p>
</body>

</html>
```

```
<!DOCTYPE HTML>
<html>

<head>
    <meta charset="utf-8">
    <title>img的align属性</title>
    <style>
        h2 {
            background: #dddddd;
            color: chocolate;
        }

        p {
            background: #dddddd;
        }

        h2#a {
            background-image: url(images/lines.png);
            background-repeat: repeat-x;
            background-position-y: 47px;
        }

        h2#b {
            background-image: url(images/lines.png);
            background-repeat: repeat-x;
            background-position-y: 14px;
        }

        h2#c {
            background-image: url(images/lines.png);
            background-repeat: repeat-x;
            background-position-y: 2px;
        }
    </style>
</head>

<body>
    <h2 id="a">默认底部bottom <img src="images/home.png" width="70"> align</h2>
    <h2 id="b">居中middle <img src="images/home.png" align="middle" width="70"> align</h2>
    <h2 id="c">顶部top <img src="images/home.png" align="top" width="70"> align</h2>
    <p><img src="images/home.png" align="left" hspace="25px" vspace="15px">注意：不同的浏览器以及同一浏览器的不同版本对 align 属性的某些值的处理方式是不同的。
        <img
            src="images/home.png" align="right" width="70">注意：HTML 4.01 不推荐使用 align 属性，XHTML 1.0 Strict DTD 不支持该属性，同时 HTML 5 也不再支持该属性。</p>
</body>

</html>
```

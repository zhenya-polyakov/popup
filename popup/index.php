<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<title>Всплывающая форма обратной связи </title>
<meta name="description" content="" />
<meta name="keywords" content="" /> 
<link rel="stylesheet" type="text/css" href="./style.css"/>
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
<script type="text/javascript" src="./js/jquery-1.7.2.min.js" ></script>
<script type="text/javascript" src="./js/script.js"></script>
</head>
<body>
<div id="content" style="height:800px; width:980px; margin:0 auto; border:1px solid black; padding:200px 100px; text-align:center;">
    <a href="#" id="callback">Заказать обратный звонок</a>
	<Br/>
	<br/>
	<a href="#" id="video_btn">Всплывающий видео-блок</a>
</div>
<div id="popup">
    <form id="contact_form" role="form" method="post" action="./php/order.php">
        <h3>Напишите нам</h3>
        <input type="text" name="name"  placeholder="Как к вам обращаться?">
        <input type="text" name="tel"  class="required" placeholder="Контакный телефон (обязательно)">
        <input type="text" name="email" placeholder="Email">
        <input type="hidden" name="send" value="1">
        <textarea name="message" placeholder="Текст сообщения" rows="5"></textarea>
        <a href="#" class="btn button form_submit">Заказать</a>
    </form>
</div>

<div id="popup_video">    
    <h3>Видео блок</h3>
	<div id="popup_video_block">
	</div>        
</div>
</body>
</html>

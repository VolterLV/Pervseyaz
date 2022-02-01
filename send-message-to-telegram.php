<?php
$msgs = [];
if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
      $token = "1876449115:AAEidAvwbCLJO_24nvKB-zl-x7TjHJ7i3fs";
    $chat_id = "1841719774";  
/*   $token = "1800530750:AAHsYQBhdNdwjvLvQJn0-OPOl3MOlB_B5a8";
    $chat_id = "704168903"; */


    if (!empty($_POST['name']) && !empty($_POST['phone'])){
        $bot_url = "https://api.telegram.org/bot{$token}/";
        $urlForPhoto = $bot_url . "sendPhoto?chat_id=" . $chat_id;
 
        if(!empty($_FILES['file']['tmp_name'])) {
			
            // Путь загрузки файлов
            $path = $_SERVER['DOCUMENT_ROOT'] . '/images/tmp/';
 
            // Массив допустимых значений типа файла
            $types = array('image/gif', 'image/png', 'image/jpeg', 'application/pdf','jpg', 'jpeg', 'gif', 'png', 'zip', 'xlsx', 'cad', 'pdf', 'doc', 'docx', 'ppt', 'pptx', 'pps', 'ppsx', 'odt', 'xls', 'xlsx', '.mp3', 'm4a', 'ogg', 'wav', 'mp4', 'm4v', 'mov', 'wmv');
 
            // Максимальный размер файла
            $size = 1024000;
 
            // Проверяем тип файла
           if (!in_array($_FILES['file']['type'], $types)) {
                 $msgs['err'] = 'Запрещённый тип файла.';
                echo json_encode($msgs);
                die();
             } 
              
             // Проверяем размер файла
             if ($_FILES['file']['size'] > $size) {
                 $msgs['err'] = 'Слишком большой размер файла.';
                echo json_encode($msgs);
                die('Слишком большой размер файла.');
             }
              
             // Загрузка файла и вывод сообщения
             if (!@copy($_FILES['file']['tmp_name'], $path . $_FILES['file']['name'])) {
                 $msgs['err'] = 'Что-то пошло не так. Файл не отправлен!';
                 echo json_encode($msgs);
             } else {
                $filePath = $path . $_FILES['file']['name'];
                $post_fields = array('chat_id' => $chat_id, 'photo' => new CURLFile(realpath($filePath)) );
                $ch = curl_init();
                curl_setopt($ch, CURLOPT_HTTPHEADER, array( "Content-Type:multipart/form-data" ));
                curl_setopt($ch, CURLOPT_URL, $urlForPhoto);
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
                curl_setopt($ch, CURLOPT_POSTFIELDS, $post_fields);
                $output = curl_exec($ch);
                unlink($filePath);
             }
        }
     if (isset($_POST['name'])) {
          if (!empty($_POST['name'])){
            $name = strip_tags($_POST['name']) . "%0A";
          }
        }
 
        if (isset($_POST['phone'])) {
          if (!empty($_POST['phone'])){
            $phone = "%2B" . strip_tags($_POST['phone']) . "%0A";
          }
        }
 
		  if (isset($_POST['comment'])) {
          if (!empty($_POST['comment'])){
            $comment = strip_tags($_POST['comment']) . "%0A";
          }
        }

			if (isset($_POST['lang-1'])) {
          if (!empty($_POST['lang-1'])){
            $lang1 = strip_tags($_POST['lang-1']) . "%0A";
          }
        }
		  			if (isset($_POST['lang-2'])) {
          if (!empty($_POST['lang-2'])){
            $lang2 = strip_tags($_POST['lang-2']) . "%0A";
          }
        }

			if (isset($_POST['cost'])) {
          if (!empty($_POST['cost'])){
            $cost = strip_tags($_POST['cost']) . "%0A";
          }
        }
		  			if (isset($_POST['costua'])) {
          if (!empty($_POST['costua'])){
            $costua = strip_tags($_POST['costua']) . "%0A";
          }
        }

			if (isset($_POST['media'])) {
          if (!empty($_POST['media'])){
            $media = strip_tags($_POST['media']) . "%0A";
          }
        }

        if (isset($_POST['theme'])) {
          if (!empty($_POST['theme'])){
            $theme = strip_tags($_POST['theme']);
          }
             $arr = array(
        'Имя пославшего:' => $name,
        'Телефон:' => $phone,
        'Коментарий:' => $comment,
		   'Язык оригинала:' => $lang1,
			'Язык перевода:' => $lang2,
        'Цена-руб:' => $cost,
		   'Цена-грн:' => $costua,
        'Соц:' => $media,
        'Тема:' => $theme,
    );
        }


    //Настраиваем внешний вид сообщения в телеграме
    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };
        $sendTextToTelegram = file_get_contents("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}");
        if ($output && $sendTextToTelegram) {
            $msgs['okSend'] = 'Спасибо за отправку вашего сообщения!';
            echo json_encode($msgs);
        } elseif ($sendTextToTelegram) {
            $msgs['okSend'] = 'Спасибо за отправку вашего сообщения!';
            echo json_encode($msgs);
          return true;
        } else {
            $msgs['err'] = 'Ошибка. Сообщение не отправлено!';
            echo json_encode($msgs);
            die('Ошибка. Сообщение не отправлено!');
        }
 
    } else {
        $msgs['err'] = 'Ошибка. Вы заполнили не все обязательные поля!';
        echo json_encode($msgs);;
    }
} else {
  header ("Location: /");
}
?>
<?php

if ( isset($_GET['image_path']) )
{
    $file = realpath(dirname(__FILE__).'/'.$_GET['image_path']); // assuming that this file is placed in the document root
    list($width, $height, $type) = getimagesize($file);
    $info = pathinfo($file);

    if ( ! in_array( strtolower($info['extension']), array('gif','jpg','jpeg','png')) ) die(); // quick format check
    
    $bp = isset($_COOKIE['rwd-breakpoint']) ? intval($_COOKIE['rwd-breakpoint']) : 480;
    
    if ( isset( $_COOKIE['rwd-resolution'] ) && intval($_COOKIE['rwd-resolution']) > $bp )
    {
         // load the bigger image for larger screen resolutions
         // for this example, larger images are stored with the same name in a subdir called 'large'
         $larger = $info['dirname'] . '/large/' . $info['basename'];
         if ( file_exists($larger) ) $file = $larger;
    }

    header("Content-Type: " . image_type_to_mime_type($type)); // send correct mimetype header
    echo file_get_contents($file); // send file contents
}

<?php
class Log
{
	public $filename;
	public $message;
	public function logMessage($loglevel, $message)
	{
   		$this->fileName = date("Y-m-d") . ".log";
    	$handle = fopen($this->fileName, "a");
    	fwrite($handle, date("Y-m-d H:i:s") . "[" . $loglevel . "]" . $message . PHP_EOL);
	}
	public function info($message)
	{
		$this->logMessage('INFO', $message);
	}
	public function error($message)
	{
		$this->logMessage('ERROR', $message);
	}
}
?>
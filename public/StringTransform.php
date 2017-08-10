<?php
class StringTransform

{
	public static $stringTest = "test";
	public static function isLetter($str)
	{
		return ctype_alpha($str);
	}
	public static function secondCharCap($str)
	{

	}
}
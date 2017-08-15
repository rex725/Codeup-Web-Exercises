<?php

require_once "env.php";
require_once "Park.php";

Park::dbConnect();

Park::$dbc->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
echo Park::$dbc->getAttribute(PDO::ATTR_CONNECTION_STATUS) . "\n";

$national_parks = [
	['name'=>'Glacier National Park', 'location'=>'Montana', 'date_established'=>'1910-05-11', 'area_in_acres'=>1013000, 'description'=>'Glacier National Park is a 1,583-sq.-mi. wilderness area in Montana\'s Rocky Mountains, with glacier-carved peaks and valleys running to the Canadian border. It\'s crossed by the mountainous Going-to-the-Sun Road. Among more than 700 miles of hiking trails, it has a route to photogenic Hidden Lake. Other activities include backpacking, cycling and camping. Diverse wildlife ranges from mountain goats to grizzly bears.'],
	['name'=>'Yellowstone National Park', 'location'=>'Wyoming, Montana, Idaho', 'date_established'=>'1872-03-01', 'area_in_acres'=>2222000, 'description'=> 'Yellowstone National Park is a nearly 3,500-sq.-mile wilderness recreation area atop a volcanic hot spot. Mostly in Wyoming, the park spreads into parts of Montana and Idaho too. Yellowstone features dramatic canyons, alpine rivers, lush forests, hot springs and gushing geysers, including its most famous, Old Faithful. It\'s also home to hundreds of animal species, including bears, wolves, bison, elk and antelope.'],
	['name'=>'Yosemite National Park', 'location'=>'California', 'date_established'=>'1890-10-01', 'area_in_acres'=>784000, 'description'=> 'Yosemite National Park is in California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoia trees, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome. In Yosemite Village are shops, restaurants, lodging, the Yosemite Museum and the Ansel Adams Gallery, with prints of the photographer’s renowned black-and-white landscapes of the area.'],
	['name'=>'Olympic National Park', 'location'=>'Washington', 'date_established'=>'1983-05-29', 'area_in_acres'=>922700, 'description'=> 'Olympic National Park is on Washington\'s Olympic Peninsula in the Pacific Northwest. The park sprawls across several different ecosystems, from the dramatic peaks of the Olympic Mountains to old-growth forests. The summit of glacier-clad Mt. Olympus is popular with climbers, and hiking and backpacking trails cut through the park\'s rainforests and along its Pacific coastline.'],
	['name'=>'Grand Teton National Park', 'location'=>'Wyoming', 'date_established'=>'1929-02-26', 'area_in_acres'=>310000, 'description'=> 'Grand Teton National Park is in the northwest of the U.S state of Wyoming. It encompasses the Teton mountain range, the 4,000-meter Grand Teton peak, and the valley known as Jackson Hole. It’s a popular destination in summer for mountaineering, hiking, backcountry camping and fishing, linked to nearby Yellowstone National Park by the John D. Rockefeller, Jr. Memorial Parkway.'],
	['name'=>'Great Smoky Mountains National Park', 'location'=>'North Carolina, Tennessee', 'date_established'=>'1934-05-15', 'area_in_acres'=>522000, 'description'=> 'Great Smoky Mountains National Park straddles the border between North Carolina and Tennessee. The sprawling landscape encompasses lush forests and an abundance of wildflowers that bloom year-round. Streams, rivers and waterfalls appear along hiking routes that include a segment of the Appalachian Trail. An observation tower tops Clingmans Dome, the highest peak, offering scenic views of the mist-covered mountains.'],
	['name'=>'Zion National Park', 'location'=>'Utah', 'date_established'=>'1919-11-19', 'area_in_acres'=>146600, 'description'=>'Zion National Park is a southwest Utah nature preserve distinguished by Zion Canyon’s steep red cliffs. Zion Canyon Scenic Drive cuts through its main section, leading to forest trails along the Virgin River. The river flows to the Emerald Pools, which have waterfalls and a hanging garden. Also along the river, partly through deep chasms, is Zion Narrows wading hike.'],
	['name'=>'Acadia National Park', 'location'=>'Maine', 'date_established'=>'1916-07-08', 'area_in_acres'=>49052, 'description'=>'Acadia National Park is a 47,000-acre Atlantic coast recreation area primarily on Maine\'s Mount Desert Island. Its landscape is marked by woodland, rocky beaches and glacier-scoured granite peaks such as Cadillac Mountain, the highest point on the United States’ East Coast. Among the wildlife are moose, bear, whales and seabirds. The bayside town of Bar Harbor, with restaurants and shops, is a popular gateway.'],
	['name'=>'Grand Canyon National Park', 'location'=>'Arizona', 'date_established'=>'1919-02-26', 'area_in_acres'=>1217000, 'description'=>'Grand Canyon National Park, in Arizona, is home to much of the immense Grand Canyon, with its layered bands of red rock revealing millions of years of geological history. Viewpoints include Mather Point, Yavapai Observation Station and architect Mary Colter’s Lookout Studio and her Desert View Watchtower. Lipan Point, with wide views of the canyon and Colorado River, is a popular, especially at sunrise and sunset.'],
	['name'=>'Joshua Tree National Park', 'location'=>'California', 'date_established'=>'1994-10-31', 'area_in_acres'=>790600, 'description'=>'Joshua Tree National Park is a vast protected area in southern California. It\'s characterized by rugged rock formations and stark desert landscapes. Named for the region’s twisted, bristled Joshua trees, the park straddles the cactus-dotted Colorado Desert and the Mojave Desert, which is higher and cooler. Keys View looks out over the Coachella Valley. Hiking trails weave through the boulders of Hidden Valley.']
];
foreach ($national_parks as $parks)
{
	$park = new Park();
	$park->name = $parks['name'];
	$park->location = $parks['location'];
	$park->dateEstablished = $parks['date_established'];
	$park->areaInAcres = $parks['area_in_acres'];
	$park->description = $parks['description'];
	$park->insert();
}


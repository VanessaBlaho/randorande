<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Rande;

class RandesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $randes = [
    [
        'id' => 1,
        'name' => 'Cook dinner',
        'description' => 'Make your own pizza from scratch. Try tossing your dough up in the air. Can you do it like a real pizzamaker? Arrange your pizza toppings and make art out of it.',
        'image_path' => '/images/randes/1_cook.png',
        'winter' => true,
        'spring' => true,
        'summer' => true,
        'fall' => true,
        'indoors' => true,
        'budget_id' => 2,
        'hint_path' => 'food'
    ],
    [   
        'id' => 2,
        'name' => 'Have a picnic',
        'description' => 'Nothing beats al fresco dining. Pack yourselves a basket of goodies and have a picnic in your nearest park. Is the weather outside frightful? Have your picnic indoors on the floor in your living room instead.',
        'image_path' => '/images/randes/2_picnic.png',
        'winter' => false,
        'spring' => true,
        'summer' => true,
        'fall' => true,
        'indoors' => true,
        'budget_id' => 2,
        'hint_path' => 'food'
    ],
    [   
        'id' => 3,
        'name' => 'Go for a hike',
        'description' => 'Get some exercise together by taking a nice long hike. An adventure is the perfect time to bond with each other. Is there no natural surroundings or hiking trails near you? Hiking doesn\'t always have to be in the woods. Take a "hike" in your city or neighborhood instead.',
        'image_path' => '/images/randes/3_sunset.png',
        'winter' => false,
        'spring' => true,
        'summer' => true,
        'fall' => false,
        'indoors' => false,
        'budget_id' => 2,
        'hint_path' => 'walk'
    ],
    [   
        'id' => 4,
        'name' => 'Play a board game',
        'description' => 'Play a board game or teach yourself a new game of cards! If you\'re feeling super creative, make your own board game from scratch.',
        'image_path' => '/images/randes/4_games.png',
        'winter' => true,
        'spring' => true,
        'summer' => true,
        'fall' => true,
        'indoors' => true,
        'budget_id' => 1,
        'hint_path' => 'dice'
    ],
    [   
        'id' => 5,
        'name' => 'Spa night at home',
        'description' => 'You both deserve some self-care! Buy face masks from your local drug store and check in with yourselves. Or better yet, look up a face mask recipe and make your own. Play some music while you wind down or just have a nice chat about your day.',
        'image_path' => '/images/randes/5_spa_night.png',
        'winter' => true,
        'spring' => true,
        'summer' => true,
        'fall' => true,
        'indoors' => true,
        'budget_id' => 2,
        'hint_path' => 'mask'
    ],
    [   
        'id' => 6,
        'name' => 'Go through old photos',
        'description' => 'A picture is worth 1,000 words. Look through old photos of yourselves and talk about those precious moments in detail. Be sure to mention your best childhood memories.',
        'image_path' => '/images/randes/6_old_photos.png',
        'winter' => true,
        'spring' => true,
        'summer' => true,
        'fall' => true,
        'indoors' => true,
        'budget_id' => 1,
        'hint_path' => 'photo'
    ],
    [   
        'id' => 7,
        'name' => 'Zoo or aquarium',
        'description' => 'Visit your local zoo or aquarium. What was your favorite animal or fish you saw?',
        'image_path' => '/images/randes/7_zoo_aquarium.png',
        'winter' => true,
        'spring' => true,
        'summer' => true,
        'fall' => true,
        'indoors' => true,
        'budget_id' => 3,
        'hint_path' => 'animal'
    ],
    [   
        'id' => 8,
        'name' => 'Scavenger hunt',
        'description' => 'Each of you choose 10 random objects from your house. Hide them in secret places and create a list with hints for the other person to find them. Give each other a passionate kiss every time you find one of the objects.',
        'image_path' => '/images/randes/8_scavenger_hunt.png',
        'winter' => true,
        'spring' => true,
        'summer' => true,
        'fall' => true,
        'indoors' => true,
        'budget_id' => 1,
        'hint_path' => 'dice'
    ],
    [   
        'id' => 9,
        'name' => 'Explore a museum',
        'description' => 'Find a list of museums in your area and choose one randomly. Pay the museum a visit.',
        'image_path' => '/images/randes/9_museum.png',
        'winter' => true,
        'spring' => true,
        'summer' => true,
        'fall' => true,
        'indoors' => true,
        'budget_id' => 3,
        'hint_path' => 'art'
    ],
    [   
        'id' => 10,
        'name' => 'Go out for dessert',
        'description' => 'Go to your favorite café or confectionery and treat yourself to a slice of heaven. If you\'re watching your figure, get one dessert and share it! There\'s nothing more romantic than asking the waiter to bring two forks.',
        'image_path' => '/images/randes/10_dessert.png',
        'winter' => true,
        'spring' => true,
        'summer' => true,
        'fall' => true,
        'indoors' => true,
        'budget_id' => 2,
        'hint_path' => 'dessert'
    ],
    [   
        'id' => 11,
        'name' => 'Have a baking competition',
        'description' => 'Who can bake the best cookies or cake? Find a dessert recipe online that you both will enjoy. Then each of you make your own version separately. Bake both of your versions in the oven at the same time and try them. Who baked it better?',
        'image_path' => '/images/randes/11_bake.png',
        'winter' => true,
        'spring' => true,
        'summer' => true,
        'fall' => true,
        'indoors' => true,
        'budget_id' => 2,
        'hint_path' => 'dessert'
    ],
    [   
        'id' => 12,
        'name' => 'Try a new workout',
        'description' => 'Find a cool workout online or maybe an aerobics video on YouTube. Do the workout together. Look into each other\'s eyes after every exercise and plant a big kiss.',
        'image_path' => '/images/randes/12_workout.png',
        'winter' => true,
        'spring' => true,
        'summer' => true,
        'fall' => true,
        'indoors' => true,
        'budget_id' => 1,
        'hint_path' => 'sports'
    ],
    [   
        'id' => 13,
        'name' => 'Do a puzzle',
        'description' => 'Buy a new puzzle from your local toy shop or find a free puzzle to do online.',
        'image_path' => '/images/randes/13_puzzle.png',
        'winter' => true,
        'spring' => true,
        'summer' => true,
        'fall' => true,
        'indoors' => true,
        'budget_id' => 2,
        'hint_path' => 'dice'
    ],
    [   
        'id' => 14,
        'name' => 'Movie night at home',
        'description' => 'Double feature: each of you share one of your favorite movies that the other hasn\'t seen before. It can be a film from your childhood or whenever. You\'ll learn a lot about each other\'s tastes.',
        'image_path' => '/images/randes/14_movie_night.png',
        'winter' => true,
        'spring' => true,
        'summer' => true,
        'fall' => true,
        'indoors' => true,
        'budget_id' => 1,
        'hint_path' => 'movie'
    ],
    [   
        'id' => 15,
        'name' => 'Wine tasting',
        'description' => 'Buy different bottles of wine. They don\'t have to be expensive. Then try them out at home. Or if your budget allows, sign up for a wine tasting at your local wine bar or winery.',
        'image_path' => '/images/randes/15_wine_tasting.png',
        'winter' => true,
        'spring' => true,
        'summer' => true,
        'fall' => true,
        'indoors' => true,
        'budget_id' => 3,
        'hint_path' => 'wine'
    ],
    [   
        'id' => 16,
        'name' => 'Go thrift shopping',
        'description' => 'Google all the thrift shops in your area and visit every single one of them. But you don\'t have to buy anything if you\'re budget is tight. Make a scavenger hunt out of it: how many leopard print pieces of clothing can you find? How many neon-colored tracksuits?',
        'image_path' => '/images/randes/16_thrift_shopping.png',
        'winter' => true,
        'spring' => true,
        'summer' => true,
        'fall' => true,
        'indoors' => true,
        'budget_id' => 2,
        'hint_path' => 'clothing'
    ],
    [   
        'id' => 17,
        'name' => 'Make a romantic playlist',
        'description' => 'Make a playlist of all your favorite love songs. If you have wine or tea at home, pour yourself a glass or cup and sip away as you listen to the soothing music.',
        'image_path' => '/images/randes/17_playlist.png',
        'winter' => true,
        'spring' => true,
        'summer' => true,
        'fall' => true,
        'indoors' => true,
        'budget_id' => 1,
        'hint_path' => 'music'
    ],
    [   
        'id' => 18,
        'name' => 'Watch a sports game',
        'description' => 'Find a sports game to watch on TV or online. Not into sports? Remember that not all sports involve balls. Watch a poker match, ice skating, or a dance competition. The possibilities are endless.',
        'image_path' => '/images/randes/18_sports_game.png',
        'winter' => true,
        'spring' => true,
        'summer' => true,
        'fall' => true,
        'indoors' => true,
        'budget_id' => 1,
        'hint_path' => 'sports'
    ],
    [   
        'id' => 19,
        'name' => 'Cheese tasting',
        'description' => 'Go to your local delicatessen and buy yourself different cheeses. Then have your own cheese tasting experience at home. Rate each cheese on a scale of 1 to 10.',
        'image_path' => '/images/randes/19_cheese_tasting.png',
        'winter' => true,
        'spring' => true,
        'summer' => true,
        'fall' => true,
        'indoors' => true,
        'budget_id' => 3,
        'hint_path' => 'food'
    ],
    [   
        'id' => 20,
        'name' => 'Go ice skating',
        'description' => 'Find your nearest winter skating rink and hit the ice! If there\'s none near you, a roller rink will do. Or just go rollerblading at home. What matters is you\'re spending time with each other on wheels and are there to catch the other if they fall.',
        'image_path' => '/images/randes/20_ice_skating.png',
        'winter' => true,
        'spring' => false,
        'summer' => false,
        'fall' => false,
        'indoors' => false,
        'budget_id' => 3,
        'hint_path' => 'sports'
    ],
    [   
        'id' => 21,
        'name' => 'Build a snowman',
        'description' => 'Create a snowman together. Or better yet, make a competition out of it and see who makes the best snowman. Ask a passerby which snowman they think is the best. Is there no snow this winter? Make a castle out of sticks instead.',
        'image_path' => '/images/randes/21_snowman.png',
        'winter' => true,
        'spring' => false,
        'summer' => false,
        'fall' => false,
        'indoors' => false,
        'budget_id' => 1,
        'hint_path' => 'snow'
    ],
    [   
        'id' => 22,
        'name' => 'Watch the sunset',
        'description' => 'Sit and watch the sunset. Sounds so cliché, right? But there\'s a reason millions of couples still do it. There\'s nothing more captivating than the natural beauty of the sun setting on the horizon and sharing it with your darling.',
        'image_path' => '/images/randes/22_sunset.png',
       'winter' => false,
        'spring' => false,
        'summer' => true,
        'fall' => false,
        'indoors' => false,
        'budget_id' => 1,
        'hint_path' => 'sun'
    ],
    [   
        'id' => 23,
        'name' => 'Write each other love letters',
        'description' => 'All you need is two pieces of paper, two envelopes, and two pens. Write each other a love letter just like your grandparents use to do. Stick your letter in an envelope and hide it somewhere. Give each other hints on where to find it. Then read them out loud to each other in your best romantic voice.',
        'image_path' => '/images/randes/23_love_letters.png',
        'winter' => true,
        'spring' => true,
        'summer' => true,
        'fall' => true,
        'indoors' => true,
        'budget_id' => 1,
        'hint_path' => 'envelope'
    ],
    [   
        'id' => 24,
        'name' => 'Buy a new plant',
        'description' => 'Go to your nearest flower shop and buy a crazy, cool, new plant for your home décor. Or even buy a pack of seeds and plant something from scratch. Will it be a tomato plant? Just flowers? The choice is yours!',
        'image_path' => '/images/randes/24_plant.png',
        'winter' => false,
        'spring' => true,
        'summer' => true,
        'fall' => true,
        'indoors' => true,
        'budget_id' => 2,
        'hint_path' => 'plant'
    ],
    [   
        'id' => 25,
        'name' => 'Make a bucket list',
        'description' => 'Many people talk about their bucket lists, but never put it down on paper. Make your own bucket lists then share it with each other. Is there something on your bucket lists you can do together in the near future? Make plans and do it!',
        'image_path' => '/images/randes/25_bucket_list.png',
        'winter' => true,
        'spring' => true,
        'summer' => true,
        'fall' => true,
        'indoors' => true,
        'budget_id' => 1,
        'hint_path' => 'notepad'
    ],
    [   
        'id' => 26,
        'name' => 'Ride bikes',
        'description' => 'Get carried away by the calming breeze of a bike ride. You don\'t have to be professional cyclists to have a good time. If you don\'t own your own bike, try a bike sharing app. Who can cycle the fastest?',
        'image_path' => '/images/randes/26_bike_ride.png',
        'winter' => false,
        'spring' => true,
        'summer' => true,
        'fall' => false,
        'indoors' => false,
        'budget_id' => 2,
        'hint_path' => 'sports'
    ],
    [   
        'id' => 27,
        'name' => 'Go bowling',
        'description' => 'Slay in your lane! Head to your local bowling alley and play a couple of bowling matches. If you\'re feeling extra competitive, join a bowling league together. If you\'re on a tighter budget, make your own bowling alley at home. All you need is 9 empty bottles and a ball!',
        'image_path' => '/images/randes/27_bowling.png',
        'winter' => true,
        'spring' => true,
        'summer' => true,
        'fall' => true,
        'indoors' => true,
        'budget_id' => 3,
        'hint_path' => 'sports'
    ],
    [   
        'id' => 28,
        'name' => 'Play mini golf',
        'description' => 'The perfect outdoor outing for a mid-summer day. Put on your best shorts and head to your local mini golf course. If there\'s none in your area, try frisbee golf instead. All you need is a frisbee and a bucket to toss the frisbee in.',
        'image_path' => '/images/randes/28_golf.png',
        'winter' => false,
        'spring' => true,
        'summer' => true,
        'fall' => false,
        'indoors' => false,
        'budget_id' => 3,
        'hint_path' => 'sports'
    ],
    [   
        'id' => 29,
        'name' => 'Go to IKEA',
        'description' => 'Whether you’re craving Swedish meatballs or just window shopping for new bedsheets, a trip to IKEA is always a fun outing.',
        'image_path' => '/images/randes/29_ikea.png',
        'winter' => true,
        'spring' => true,
        'summer' => true,
        'fall' => true,
        'indoors' => true,
        'budget_id' => 2,
        'hint_path' => 'walk'
    ],
    [   
        'id' => 30,
        'name' => 'Escape room',
        'description' => 'Looking for a way to get closer? An escape room could be the answer. Learn to work as a team to find your escape route. On a tight budget? Find one of many free escape games online and try it in your own town.',
        'image_path' => '/images/randes/30_escape_room.png',
        'winter' => true,
        'spring' => true,
        'summer' => true,
        'fall' => true,
        'indoors' => true,
        'budget_id' => 2,
        'hint_path' => 'walk'
    ],
    [   
        'id' => 31,
        'name' => "Farmer's market",
        'description' => 'Find your local farmer\'s market and step out of your comfort zone. Try new foods or shop for a cool new recipe you found online. If you\'re not looking to buy anything, take selfies at different stands and post them on social media. Make your friends or followers think you had the time of your lives.',
        'image_path' => '/images/randes/31_farmers_market.png',
        'winter' => false,
        'spring' => true,
        'summer' => true,
        'fall' => false,
        'indoors' => false,
        'budget_id' => 2,
        'hint_path' => 'food'
    ],
    [   
        'id' => 32,
        'name' => 'Visit a fortune teller',
        'description' => 'Divine divination. Google your closest fortune teller or psychic and have your future read to you just for laughs. Whether it\'s a crystal ball, palm reading, or reading tea leaves, you\'re bound to have a lot of fun. As an alternative, make up your own horoscopes.',
        'image_path' => '/images/randes/32_fortune_teller.png',
        'winter' => true,
        'spring' => true,
        'summer' => true,
        'fall' => true,
        'indoors' => true,
        'budget_id' => 2,
        'hint_path' => 'mystery'
    ],
    [   
        'id' => 33,
        'name' => 'Draw each other',
        'description' => 'Find some scratch paper and writing utensils of your choice. Don\'t be afraid to get creative and draw each other in different styles. Try Picasso Cubism, German Expressionism, or Renaissance styles. Spice things up by posing for each other nude.',
        'image_path' => '/images/randes/33_draw_each_other.png',
        'winter' => true,
        'spring' => true,
        'summer' => true,
        'fall' => true,
        'indoors' => true,
        'budget_id' => 1,
        'hint_path' => 'art'
    ],
    [   
        'id' => 34,
        'name' => 'Visit a cemetery',
        'description' => 'Pay a visit to a local cemetery of your choosing and go for a stroll. If you\'re feeling generous, find a grave that\'s been neglected. Buy some flowers for the grave or make your own boquet out of nearby weeds or plants. Wish them well in the afterlife.',
        'image_path' => '/images/randes/34_cemetery.png',
        'winter' => true,
        'spring' => true,
        'summer' => true,
        'fall' => true,
        'indoors' => false,
        'budget_id' => 1,
        'hint_path' => 'walk'
    ],
    [   
        'id' => 35,
        'name' => 'Cartoons from childhood',
        'description' => 'Each of you share an episode of one of your favorite childhood cartoons. If it\'s the weekend, watch them on a Saturday morning in bed with a cup of coffee. If you choose to watch during the day or in the evening, have a cup of herbal tea instead. Be sure to snuggle up close.',
        'image_path' => '/images/randes/35_cartoons.png',
        'winter' => true,
        'spring' => true,
        'summer' => true,
        'fall' => true,
        'indoors' => true,
        'budget_id' => 1,
        'hint_path' => 'movie'
    ],
    [   
        'id' => 36,
        'name' => 'Take a pottery class',
        'description' => 'Sign up for a pottery class and make usable 3D art together. Whether you make coffee mugs, bowls, or goblets, be sure to incorporate your works of art into everyday use for your home. Everyone loves a good conversation starter: "Oh, we made these in our pottery class. What do you think?"',
        'image_path' => '/images/randes/36_pottery.png',
        'winter' => true,
        'spring' => true,
        'summer' => true,
        'fall' => true,
        'indoors' => true,
        'budget_id' => 3,
        'hint_path' => 'art'
    ],
    [   
        'id' => 37,
        'name' => 'Dance party',
        'description' => 'Make a playlist of 20 of dance hits. Groove to the music in the comfort of your own home! Twirl, twerk, and drop it like it\'s hot. Dancing is a great way to bond and let off some steam.',
        'image_path' => '/images/randes/37_dance_party.png',
        'winter' => true,
        'spring' => true,
        'summer' => true,
        'fall' => true,
        'indoors' => true,
        'budget_id' => 1,
        'hint_path' => 'music'
    ],
    [   
        'id' => 38,
        'name' => 'Hold a mock olympics',
        'description' => 'Play goofy games, win romantic prizes. 1.) GAME: Whose paper airplane can fly the furthest? PRIZE: Win a backrub. 2.) GAME: Who can balance a book on their head and walk in a straight line the longest? PRIZE: Win a foot rub.  MAKE YOUR OWN GAMES TOO.',
        'image_path' => '/images/randes/38_mock_olympics.png',
        'winter' => true,
        'spring' => true,
        'summer' => true,
        'fall' => true,
        'indoors' => true,
        'budget_id' => 1,
        'hint_path' => 'sports'
    ],
    [   
        'id' => 39,
        'name' => 'Visit a video arcade',
        'description' => 'Visit your local arcade and play some 2-player video games. If there\'s no video arcades near you, play video games at home. Take turns playing if you have no 2-player games available.',
        'image_path' => '/images/randes/39_arcade.png',
        'winter' => true,
        'spring' => true,
        'summer' => true,
        'fall' => true,
        'indoors' => true,
        'budget_id' => 2,
        'hint_path' => 'dice'
    ],
    [   
        'id' => 40,
        'name' => 'Make fancy cocktails',
        'description' => 'Look up a new cocktail recipe online and make it yourself. Don\'t drink alcohol? Make mocktails instead. Then sip away and have a laugh.',
        'image_path' => '/images/randes/40_cocktails.png',
        'winter' => true,
        'spring' => true,
        'summer' => true,
        'fall' => true,
        'indoors' => true,
        'budget_id' => 3,
        'hint_path' => 'wine'
    ],
    [   
        'id' => 41,
        'name' => 'Bar crawl',
        'description' => 'Pick 5 cool bars. Maybe you\'ve been to them before, maybe you haven\'t. Grab a drink at each one. If you don\'t want to worry about having a designated driver, make your own bar crawl at home. Have a drink ready in each room and hop from one room to the next.',
        'image_path' => '/images/randes/41_bar_crawl.png',
        'winter' => true,
        'spring' => true,
        'summer' => true,
        'fall' => true,
        'indoors' => true,
        'budget_id' => 3,
        'hint_path' => 'beer'
    ],
    [   
        'id' => 42,
        'name' => 'Art gallery',
        'description' => 'Google all art galleries in your area and choose one randomly to visit. Bring a pad of paper and pencils with you. Pick your favorite work of art and sketch it together. Who has the best sketch?',
        'image_path' => '/images/randes/42_art_gallery.png',
        'winter' => true,
        'spring' => true,
        'summer' => true,
        'fall' => true,
        'indoors' => true,
        'budget_id' => 3,
        'hint_path' => 'art'
    ],
    [   
        'id' => 43,
        'name' => 'Play pool or darts',
        'description' => 'Find your local dive bar with a pool table and darts and play a couple rounds. Alternatively, make your own darts game.',
        'image_path' => '/images/randes/43_darts.png',
        'winter' => true,
        'spring' => true,
        'summer' => true,
        'fall' => true,
        'indoors' => true,
        'budget_id' => 2,
        'hint_path' => 'dice'
    ],
    [   
        'id' => 44,
        'name' => 'Visit a botanical garden',
        'description' => 'Go for a stroll in your local botanical garden or park. What\'s your favorite plant you see and why?',
        'image_path' => '/images/randes/44_botanical_garden.png',
        'winter' => false,
        'spring' => true,
        'summer' => true,
        'fall' => false,
        'indoors' => false,
        'budget_id' => 2,
        'hint_path' => 'walk'
    ],
    [   
        'id' => 45,
        'name' => 'Create bouquets',
        'description' => 'Spruce up your home interior with some green. Go to your local flower shop and make your own custom bouquets for each other.',
        'image_path' => '/images/randes/45_bouquet.png',
        'winter' => true,
        'spring' => true,
        'summer' => true,
        'fall' => true,
        'indoors' => true,
        'budget_id' => 2,
        'hint_path' => 'plant'
    ],
    [   
        'id' => 46,
        'name' => 'Afternoon tea time',
        'description' => 'What\'s the tea, sis? Brew yourself some tea at home and gossip about people you know. If your budget allows, find a fancy teahouse and have tea time there. Don\'t forget to have some nice, bite-sized tea sandwiches.',
        'image_path' => '/images/randes/46_tea_time.png',
        'winter' => true,
        'spring' => true,
        'summer' => true,
        'fall' => true,
        'indoors' => true,
        'budget_id' => 2,
        'hint_path' => 'tea'
    ],
    [   
        'id' => 47,
        'name' => 'Mushroom picking',
        'description' => 'Find a free mushroom guide online and go mushroom picking in your local forest or wooded area. Forage for mushrooms and try to identify them.',
        'image_path' => '/images/randes/47_mushrooms.png',
        'winter' => false,
        'spring' => true,
        'summer' => true,
        'fall' => true,
        'indoors' => false,
        'budget_id' => 1,
        'hint_path' => 'mushroom'
    ],
    [   
        'id' => 48,
        'name' => 'Learn a magic trick',
        'description' => 'Each of you learn a new magic trick online. Demonstrate for each other the trick. Try and guess the secret to how it\'s done.',
        'image_path' => '/images/randes/48_magic_tricks.png',
        'winter' => true,
        'spring' => true,
        'summer' => true,
        'fall' => true,
        'indoors' => true,
        'budget_id' => 1,
        'hint_path' => 'mystery'
    ],
    [   
        'id' => 49,
        'name' => 'Chocolate tasting',
        'description' => 'Buy a handful of different chocolates and try them all out at home. Rate them on a scale of 1 to 10. Which ones are your favorite and why?',
        'image_path' => '/images/randes/49_chocolates.png',
        'winter' => true,
        'spring' => true,
        'summer' => true,
        'fall' => true,
        'indoors' => true,
        'budget_id' => 3,
        'hint_path' => 'food'
    ],
    [   
        'id' => 50,
        'name' => 'Go to a music event',
        'description' => 'Find an upcoming music event in your area. Whether it\'s a concert, open mic night, karaoke event, or what have you, you\'re guaranteed to have a great time!',
        'image_path' => '/images/randes/50_concert.png',
        'winter' => true,
        'spring' => true,
        'summer' => true,
        'fall' => true,
        'indoors' => true,
        'budget_id' => 3,
        'hint_path' => 'music'
    ],
    [   
        'id' => 51,
        'name' => 'Go to the theater',
        'description' => 'Buy tickets to a play, musical, ballet, or opera at your local theater. Be sure to dress up for the occasion!',
        'image_path' => '/images/randes/51_theater.png',
        'winter' => true,
        'spring' => true,
        'summer' => true,
        'fall' => true,
        'indoors' => true,
        'budget_id' => 3,
        'hint_path' => 'theater'
    ],
    [   
        'id' => 52,
        'name' => 'Act out a play',
        'description' => '"O Romeo, Romeo, wherefore art thou Romeo?" Write your own dialogue for a short romantic play featuring two characters. Then act it out at home. Don\'t be afraid to get creative and use props too!',
        'image_path' => '/images/randes/52_acting.png',
        'winter' => true,
        'spring' => true,
        'summer' => true,
        'fall' => true,
        'indoors' => true,
        'budget_id' => 1,
        'hint_path' => 'theater'
    ],

];

    foreach ($randes as $key => $rande) {
        $rande_obj = Rande::find($rande['id']);
            if ($rande_obj == null) {
                $new_rande = new Rande;
            } else {
                $new_rande = $rande_obj;
            }
            $new_rande->name = $rande['name'];
            $new_rande->description = $rande['description'];
            $new_rande->image_path = $rande['image_path'];
            $new_rande->winter = $rande['winter'];
            $new_rande->spring = $rande['spring'];
            $new_rande->summer = $rande['summer'];
            $new_rande->fall = $rande['fall'];
            $new_rande->indoors = $rande['indoors'];
            $new_rande->budget_id = $rande['budget_id'];
            $new_rande->hint_path = $rande['hint_path'];
            $new_rande->save();
            }
    }
}

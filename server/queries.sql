-- the queries used to create the tables
CREATE TABLE IF NOT EXISTS profile (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(255) NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  icon TEXT NOT NULL )

  alter table profile
  add column bio TEXT NOT NULL;

CREATE TABLE IF NOT EXISTS post (
  post_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR(255) NOT NULL,
  likes int
)

alter table post
  add column profile_id int REFERENCES profile(id);

  CREATE TABLE IF NOT EXISTS english (
  eng_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  word VARCHAR(255) NOT NULL
)

CREATE TABLE IF NOT EXISTS irish (
  ie_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  word VARCHAR(255) NOT NULL,
  word_spoken TEXT,
  eng_id int REFERENCES english(eng_id)
)

CREATE TABLE IF NOT EXISTS images (
  img_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  source TEXT NOT NULL,
  alt_text TEXT NOT NULL
)
alter table english
  add column img_id int REFERENCES images(img_id); 

  alter table irish
  add column topic VARCHAR(255) NOT NULL

  -- entering data into the tables - i focused on the language-based tables first

  INSERT INTO english (word)
VALUES ('cat'), ('dog'), ('rabbit'), ('horse'), ('rat'), ('snake'),('hamster'),('water'),('tea'),('milk'),('coffee'),('wine'),('beer'),('blue'),('red'),('green'),('orange'),('pink'),('yellow'),('purple'),('teacher'),('photographer'),('hairdresser'),('waitress'),('musician');

  -- I knew the next step was going to be the most time-consuming one, but it was also important for me to have alt tags and to have images that would lend themselves to the visual theme of the app. Although I couldn't really satisfy my goal with the second point (as I was relying on all free images, and all from unsplash for the sake of keeping it simple) I at least have written decent/helpful alt text for every image. I then added the foreign key relationship between images and eng using the GUI in supabase so that I could keep track of it all visually


  INSERT INTO images (source, alt_text)
VALUES ('https://unsplash.com/photos/orange-and-white-tabby-cat-BHJs5TZ-Nt0', 'A orange and white cat stares at the camera. The cat is licking its lips and standing against a flat pink backdrop'), ('https://unsplash.com/photos/a-small-brown-and-white-dog-wearing-a-green-bandana-yBdJjl4Do9g', 'A brown and white shih tzu looks at the camera with a slight tilt to its head. The shih tzu is wearing a green bandana and has an obvious underbite' ), ('https://unsplash.com/photos/brown-rabbit-on-white-textile---SDX4KWIbA', 'A brown lop-eared rabbit sits on a fluffy white blanket'), ('https://unsplash.com/photos/a-brown-horse-standing-on-top-of-a-lush-green-field-OYTU5RYKPjc', 'A palamino horse stands in a field. The horse has a red halter on, and behind the field is a sea of red flowers'), ('https://unsplash.com/photos/a-small-rat-standing-on-its-hind-legs-UwekB0NIKSM', 'A grey and white fancy rat stands on its hind legs to sniff. The rat is leaning one front paw on a reflective surface'), ('https://unsplash.com/photos/brown-and-beige-snake-on-white-surface-NzFA2VhY5gg', 'A banana ball python looks at the camera. Most of the pythons body is curled up, but it is stretching its head toward the camera'),('https://unsplash.com/photos/yellow-hamster-on-blue-cage-Tpff0kOfhYw', 'A golden-furred hamster peers through the door of its cage at a piece of food'),('https://unsplash.com/photos/clear-plastic-bottle-on-white-table-edBR3b2JAuA', 'A clear bottle of water. The bottle has no branding, and has a blue cap'),('https://unsplash.com/photos/a-cup-of-coffee-next-to-a-vase-of-flowers-YkUPzIij_eg', 'A pink mug of tea photographed from above. The tea sits on a decorated table next to roses and a lit candle'),('https://unsplash.com/photos/a-bottle-of-organic-milk-sitting-on-a-table-4PhVsBICtJQ', 'A glass bottle full of milk. The branding on the bottle says that it is organic milk'),('https://unsplash.com/photos/green-cup-on-saucer-_Tw4vCs9C-8', 'A capuccino in a green cup. The cup sits on a green saucer, and there is a latte-art heart on top of the coffee'),('https://unsplash.com/photos/clear-wine-glass-with-wine-EfUwk0C3RE8', 'A glass of red wine. Light is shining through the glass, making the wine glow'),('https://unsplash.com/photos/clear-glass-beer-mug-with-beer-3ORoQEJY9LA', 'A beer froths over the rim of a glass mug'),('https://unsplash.com/photos/blue-sky-with-white-clouds-gPnHi8AmO5k', 'A perfectly blue sky with no clouds'),('https://unsplash.com/photos/red-textile-in-close-up-photography-YpDkIh137ws', 'Extreme close up of a red textile'),('https://unsplash.com/photos/green-textile-in-close-up-image-HEMIBJ8QQuA', 'A close-up of green textile. The textile is heavily textured but seems soft, like a towel'),('https://unsplash.com/photos/orange-and-blue-color-illustration-p-NQlmGvFC8', 'An illustration representing the colour orange'),('https://unsplash.com/photos/a-close-up-of-a-pink-glitter-background-wKtROCixS8Y', 'A close up of light pink glitter'),('https://unsplash.com/photos/a-yellow-garage-door-that-is-closed-HexbdGWe7I8', 'A yellow roller-shutter warehouse door. The door fills the frame'),('https://unsplash.com/photos/purple-and-green-light-illustration-ob8SZbjRgFI', 'A purple backdrop. The lighting is creating a slight vignette effect'),('https://unsplash.com/photos/womens-blue-dress-shirt-TVSRWmnW8Us', 'A physics teacher writes on a blackboard in Vietnamese'),('https://unsplash.com/photos/man-using-black-dslr-camera-qWuXaWUCBXo', 'A man with curly hair takes a photo using a DSLR camera. The man is wearing a red coat and standing in front of a red door'),('https://unsplash.com/photos/woman-in-black-shirt-holding-silver-ring-nAeap3cef8k', 'A hairedresser bluntly trims the end of long hair with electric clippers'),('https://unsplash.com/photos/waitress-in-phoenix-arizona-diner-elmkW3tr4_E', 'A waitress poses smiling with a tray in a 50s American themed diner'),('https://unsplash.com/photos/a-man-in-a-green-suit-playing-a-saxophone-ZtVLotTFjhs', 'A man in a green suit plays saxophone on stage in a live music venue');


  INSERT INTO irish (word, word_spoken, eng_id, topic)
VALUES ('cat', 'https://static.learn-irish.net/sounds/Irish/Pets_01.mp3', '1', 'pets'), ('madra', 'https://static.learn-irish.net/sounds/Irish/Pets_02.mp3', '2', 'pets'), ('coinín', 'https://static.learn-irish.net/sounds/Irish/Pets_03.mp3', '3', 'pets'), ('capall', 'https://static.learn-irish.net/sounds/Irish/Pets_06.mp3', '4', 'pets'), ('francach', 'https://static.learn-irish.net/sounds/Irish/Pets_15.mp3', '5', 'pets'), ('nathair', 'https://static.learn-irish.net/sounds/Irish/Pets_13.mp3', '6', 'pets'),('hamstar', 'https://static.learn-irish.net/sounds/Irish/Pets_04.mp3', '7', 'pets')
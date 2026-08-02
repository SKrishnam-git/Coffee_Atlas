"""Static seed content for Coffee Atlas. Seeded into MongoDB on startup."""

# Verified royalty-free Unsplash imagery (from design guidelines)
IMG = {
    "hero": "https://images.unsplash.com/photo-1609050471053-8636409f9f5b?crop=entropy&cs=srgb&fm=jpg&q=85&w=2000",
    "cup": "https://images.unsplash.com/photo-1595928642581-f50f4f3453a5?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    "beans": "https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    "cherries": "https://images.unsplash.com/photo-1586095516671-d085ff58cdd4?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    "farm": "https://images.unsplash.com/photo-1647220577886-6a5faaa7c141?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    "machine": "https://images.unsplash.com/photo-1524686788093-aa1f9c0f7c4f?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
}


def _c(slug, name, origin, img, tagline, strength, milk, bitter, caff, data):
    base = {
        "slug": slug, "name": name, "origin": origin, "image": img,
        "tagline": tagline, "strength": strength, "milk": milk,
        "bitterness": bitter, "caffeine": caff,
    }
    base.update(data)
    return base


COFFEES = [
    _c("espresso", "Espresso", "Italy", IMG["machine"],
       "The concentrated heart of coffee.", 95, 0, 80, 70, {
        "history": "Espresso was born in early 20th-century Italy when Luigi Bezzera patented a steam-driven machine in 1901 to brew coffee quickly for impatient workers. It transformed coffee from a slow ritual into an instant art form.",
        "invented_by": "Luigi Bezzera (1901), refined by Desiderio Pavoni",
        "taste_notes": ["Bold", "Bittersweet", "Caramelized", "Lingering crema"],
        "ingredients": ["18g finely ground coffee", "36g water"],
        "recipe": ["Grind 18g of coffee fine.", "Tamp evenly into the portafilter.", "Lock in and extract 36g in 25-30 seconds.", "Serve immediately in a warm demitasse."],
        "brewing_time": "25-30 seconds", "milk_ratio": "0%", "espresso_ratio": "100%",
        "calories": 3, "serving_temp": "68°C", "best_beans": "Dark-roast Arabica/Robusta blend",
        "pairings": ["Dark chocolate", "Biscotti", "Sparkling water"],
        "snacks": ["Cantucci", "Amaretti"], "popularity": 98,
        "trivia": "A perfect espresso is judged by its golden crema, which should hold sugar on top for a few seconds."}),

    _c("americano", "Americano", "Italy / USA", IMG["cup"],
       "Espresso, stretched and smooth.", 60, 0, 55, 65, {
        "history": "Legend traces the Americano to WWII, when American GIs in Italy diluted intense espresso with hot water to mimic the drip coffee back home.",
        "invented_by": "American soldiers in WWII Italy",
        "taste_notes": ["Clean", "Mellow", "Roasty", "Light body"],
        "ingredients": ["1-2 espresso shots", "120ml hot water"],
        "recipe": ["Pull a double espresso.", "Heat 120ml water.", "Pour water over the espresso to preserve the crema.", "Serve black or with a splash of milk."],
        "brewing_time": "1 minute", "milk_ratio": "0%", "espresso_ratio": "35%",
        "calories": 15, "serving_temp": "70°C", "best_beans": "Medium-roast Arabica",
        "pairings": ["Croissant", "Almond cake"], "snacks": ["Shortbread"], "popularity": 90,
        "trivia": "Add the espresso to the water (a 'long black') for a thicker crema and richer aroma."}),

    _c("latte", "Latte", "Italy", IMG["cup"],
       "Silky milk meets espresso.", 40, 85, 25, 60, {
        "history": "The caffè latte as we know it was popularized in 1950s America, though Italians have paired espresso with steamed milk for breakfast for centuries.",
        "invented_by": "Popularized in the USA, roots in Italy",
        "taste_notes": ["Creamy", "Sweet", "Mild", "Velvety"],
        "ingredients": ["1 espresso shot", "240ml steamed milk", "Light foam"],
        "recipe": ["Pull a single espresso.", "Steam milk to silky microfoam.", "Pour milk holding back the foam.", "Finish with 1cm of foam and latte art."],
        "brewing_time": "3-4 minutes", "milk_ratio": "85%", "espresso_ratio": "15%",
        "calories": 190, "serving_temp": "65°C", "best_beans": "Medium-roast Arabica",
        "pairings": ["Cinnamon roll", "Banana bread"], "snacks": ["Muffins"], "popularity": 96,
        "trivia": "The word 'latte' simply means 'milk' in Italian—order one in Italy and you may just get a glass of milk."}),

    _c("cappuccino", "Cappuccino", "Italy", IMG["cup"],
       "Equal parts espresso, milk & foam.", 55, 55, 35, 60, {
        "history": "Named after the brown robes of Capuchin friars, the cappuccino emerged in Italy in the early 1900s with the spread of espresso machines.",
        "invented_by": "Named for Capuchin monks, Italy",
        "taste_notes": ["Balanced", "Airy", "Rich", "Foamy"],
        "ingredients": ["1 espresso shot", "60ml steamed milk", "60ml foam"],
        "recipe": ["Pull a single espresso.", "Steam milk to dense, airy foam.", "Pour equal thirds espresso, milk and foam.", "Dust with cocoa if desired."],
        "brewing_time": "3-4 minutes", "milk_ratio": "50%", "espresso_ratio": "33%",
        "calories": 120, "serving_temp": "65°C", "best_beans": "Medium-dark Arabica",
        "pairings": ["Cornetto", "Biscotti"], "snacks": ["Almond croissant"], "popularity": 95,
        "trivia": "Italians consider it a morning-only drink—ordering one after lunch marks you as a tourist."}),

    _c("flat-white", "Flat White", "Australia / NZ", IMG["cup"],
       "Micro-foam perfection.", 60, 70, 30, 65, {
        "history": "Fiercely claimed by both Australia and New Zealand in the 1980s, the flat white champions velvety microfoam over airy froth.",
        "invented_by": "Australia / New Zealand (1980s)",
        "taste_notes": ["Strong", "Silky", "Concentrated", "Smooth"],
        "ingredients": ["2 ristretto shots", "120ml steamed milk"],
        "recipe": ["Pull two ristretto shots.", "Steam milk to glossy microfoam.", "Pour with minimal foam (under 5mm).", "Serve in a small ceramic cup."],
        "brewing_time": "3 minutes", "milk_ratio": "65%", "espresso_ratio": "35%",
        "calories": 110, "serving_temp": "65°C", "best_beans": "Medium-roast Arabica",
        "pairings": ["Avocado toast", "Lemon slice"], "snacks": ["Scone"], "popularity": 88,
        "trivia": "The flat white uses ristretto shots for a sweeter, less bitter concentrate than a latte."}),

    _c("macchiato", "Macchiato", "Italy", IMG["machine"],
       "Espresso 'stained' with milk.", 80, 15, 60, 68, {
        "history": "Baristas 'marked' (macchiato) an espresso with a dollop of foam so servers could tell it apart from a plain shot—hence the name.",
        "invented_by": "Italian baristas",
        "taste_notes": ["Intense", "Slightly creamy", "Punchy"],
        "ingredients": ["1 espresso shot", "1 tsp milk foam"],
        "recipe": ["Pull a single espresso.", "Add a small spoon of foamed milk on top.", "Serve in an espresso cup."],
        "brewing_time": "1-2 minutes", "milk_ratio": "10%", "espresso_ratio": "90%",
        "calories": 15, "serving_temp": "67°C", "best_beans": "Dark-roast Arabica",
        "pairings": ["Dark chocolate", "Hazelnuts"], "snacks": ["Biscotti"], "popularity": 78,
        "trivia": "A 'latte macchiato' flips the ratio—it's milk stained with espresso, the opposite drink."}),

    _c("mocha", "Mocha", "Yemen / USA", IMG["cup"],
       "Chocolate-kissed indulgence.", 45, 65, 30, 62, {
        "history": "Named after the Yemeni port of Mocha famed for chocolatey beans, the modern mocha blends espresso, chocolate and steamed milk.",
        "invented_by": "Inspired by Mocha, Yemen",
        "taste_notes": ["Chocolatey", "Sweet", "Rich", "Dessert-like"],
        "ingredients": ["1 espresso shot", "2 tbsp chocolate syrup", "200ml steamed milk", "Whipped cream"],
        "recipe": ["Mix espresso with chocolate syrup.", "Steam and pour milk.", "Top with whipped cream.", "Dust with cocoa."],
        "brewing_time": "4 minutes", "milk_ratio": "65%", "espresso_ratio": "15%",
        "calories": 290, "serving_temp": "65°C", "best_beans": "Medium-roast Arabica",
        "pairings": ["Brownie", "Marshmallows"], "snacks": ["Chocolate cookies"], "popularity": 89,
        "trivia": "The original 'Mocha' beans naturally carry chocolate and wine-like notes without any added cocoa."}),

    _c("irish-coffee", "Irish Coffee", "Ireland", IMG["cup"],
       "Coffee with a warming kick.", 50, 30, 40, 55, {
        "history": "Created in 1943 by chef Joe Sheridan at Foynes airbase to warm weary transatlantic passengers with whiskey-laced coffee.",
        "invented_by": "Joe Sheridan (1943), Ireland",
        "taste_notes": ["Warming", "Boozy", "Sweet", "Creamy"],
        "ingredients": ["Hot coffee", "Irish whiskey", "Brown sugar", "Lightly whipped cream"],
        "recipe": ["Warm a glass and add sugar.", "Pour hot coffee and whiskey; stir.", "Float lightly whipped cream over the back of a spoon.", "Sip through the cream."],
        "brewing_time": "5 minutes", "milk_ratio": "20%", "espresso_ratio": "0%",
        "calories": 210, "serving_temp": "70°C", "best_beans": "Medium-dark drip coffee",
        "pairings": ["Fruit cake", "Shortbread"], "snacks": ["Toffee"], "popularity": 70,
        "trivia": "Traditionally the cream is never stirred—you drink the hot coffee through the cool cream layer."}),

    _c("affogato", "Affogato", "Italy", IMG["cup"],
       "Espresso 'drowns' gelato.", 55, 40, 30, 60, {
        "history": "A beloved Italian dessert-drink where a hot espresso shot is poured over a scoop of vanilla gelato—'affogato' means 'drowned'.",
        "invented_by": "Italy",
        "taste_notes": ["Sweet", "Creamy", "Hot-cold contrast"],
        "ingredients": ["1 espresso shot", "1 scoop vanilla gelato"],
        "recipe": ["Place a scoop of gelato in a glass.", "Pull a hot espresso.", "Pour espresso over the gelato.", "Serve immediately with a spoon."],
        "brewing_time": "2 minutes", "milk_ratio": "0%", "espresso_ratio": "50%",
        "calories": 180, "serving_temp": "Hot over cold", "best_beans": "Dark-roast Arabica",
        "pairings": ["Amaretti", "Hazelnuts"], "snacks": ["Wafer"], "popularity": 74,
        "trivia": "It sits perfectly between beverage and dessert—Italians serve it as both."}),

    _c("cold-brew", "Cold Brew", "USA / Japan", IMG["beans"],
       "Slow-steeped, smooth & sweet.", 65, 0, 20, 75, {
        "history": "Cold steeping dates back to Kyoto-style Japanese coffee, but the smooth cold brew boomed in 2010s specialty cafés worldwide.",
        "invented_by": "Kyoto tradition, modern US revival",
        "taste_notes": ["Smooth", "Low-acid", "Naturally sweet", "Chocolatey"],
        "ingredients": ["100g coarse coffee", "1L cold water"],
        "recipe": ["Combine coarse coffee with cold water.", "Steep 12-18 hours in the fridge.", "Strain through a filter.", "Serve over ice, diluted to taste."],
        "brewing_time": "12-18 hours", "milk_ratio": "0%", "espresso_ratio": "0%",
        "calories": 5, "serving_temp": "4°C", "best_beans": "Medium-roast single origin",
        "pairings": ["Cold milk", "Vanilla"], "snacks": ["Granola bar"], "popularity": 85,
        "trivia": "Cold brew has up to 67% less acidity than hot coffee, making it gentle on the stomach."}),

    _c("nitro-cold-brew", "Nitro Cold Brew", "USA", IMG["beans"],
       "Cascading, creamy, on tap.", 70, 5, 22, 78, {
        "history": "Debuting around 2013, nitro infuses cold brew with nitrogen gas for a Guinness-like cascade and creamy head—no milk required.",
        "invented_by": "US craft coffee scene (c. 2013)",
        "taste_notes": ["Creamy", "Velvety", "Sweet", "Effervescent"],
        "ingredients": ["Cold brew concentrate", "Nitrogen gas"],
        "recipe": ["Chill cold brew concentrate.", "Charge with nitrogen via a keg or whipper.", "Pour tilted to build a cascade.", "Serve with no ice for the fullest head."],
        "brewing_time": "12-18 hours + infusion", "milk_ratio": "0%", "espresso_ratio": "0%",
        "calories": 5, "serving_temp": "4°C", "best_beans": "Chocolatey medium roast",
        "pairings": ["Dark chocolate", "Salted caramel"], "snacks": ["Biscotti"], "popularity": 80,
        "trivia": "The tiny nitrogen bubbles create a natural sweetness and creaminess without any sugar or dairy."}),

    _c("turkish-coffee", "Turkish Coffee", "Turkey", IMG["beans"],
       "Unfiltered, spiced tradition.", 85, 0, 70, 72, {
        "history": "Brewed in a cezve since the Ottoman Empire (16th century), Turkish coffee is UNESCO-listed cultural heritage and a symbol of hospitality.",
        "invented_by": "Ottoman Empire",
        "taste_notes": ["Intense", "Thick", "Spiced", "Foamy"],
        "ingredients": ["Very fine coffee", "Water", "Sugar (optional)", "Cardamom (optional)"],
        "recipe": ["Add water, coffee and sugar to a cezve.", "Heat slowly without stirring.", "Let foam rise, remove before boiling.", "Pour foam-first and let grounds settle."],
        "brewing_time": "5 minutes", "milk_ratio": "0%", "espresso_ratio": "0%",
        "calories": 10, "serving_temp": "75°C", "best_beans": "Extra-fine Arabica",
        "pairings": ["Turkish delight", "Dates"], "snacks": ["Baklava"], "popularity": 76,
        "trivia": "The leftover grounds are read like tea leaves in a fortune-telling tradition called tasseography."}),

    _c("french-press", "French Press", "France", IMG["cup"],
       "Full-bodied immersion brew.", 60, 0, 45, 66, {
        "history": "Patented in France and Italy in the mid-1800s and perfected in 1929 by Attilio Calimani, the press yields a rich, sediment-rich cup.",
        "invented_by": "Attilio Calimani (1929)",
        "taste_notes": ["Full-bodied", "Robust", "Earthy", "Textured"],
        "ingredients": ["30g coarse coffee", "500ml hot water"],
        "recipe": ["Add coarse coffee to the press.", "Pour hot water (94°C) and stir.", "Steep 4 minutes.", "Press the plunger slowly and serve."],
        "brewing_time": "4 minutes", "milk_ratio": "0%", "espresso_ratio": "0%",
        "calories": 5, "serving_temp": "90°C", "best_beans": "Medium-dark single origin",
        "pairings": ["Buttered toast", "Dark chocolate"], "snacks": ["Biscuits"], "popularity": 82,
        "trivia": "Because it uses a metal mesh, oils pass through—giving a heavier body than paper-filtered coffee."}),

    _c("pour-over", "Pour Over", "Germany / Japan", IMG["cup"],
       "Clarity in every drop.", 55, 0, 35, 64, {
        "history": "Melitta Bentz invented the paper filter in 1908; Japanese brands like Hario later elevated pour-over into a precise ritual.",
        "invented_by": "Melitta Bentz (1908)",
        "taste_notes": ["Clean", "Bright", "Floral", "Nuanced"],
        "ingredients": ["22g medium-fine coffee", "360ml hot water"],
        "recipe": ["Rinse the filter and add coffee.", "Bloom with 45ml water for 30s.", "Pour in slow spirals to 360ml.", "Total brew time ~3 minutes."],
        "brewing_time": "3 minutes", "milk_ratio": "0%", "espresso_ratio": "0%",
        "calories": 3, "serving_temp": "92°C", "best_beans": "Light-roast single origin",
        "pairings": ["Fresh fruit", "Almond biscotti"], "snacks": ["Croissant"], "popularity": 84,
        "trivia": "Pour-over highlights delicate, tea-like notes that darker brewing methods often hide."}),

    _c("ristretto", "Ristretto", "Italy", IMG["machine"],
       "The sweetest short shot.", 90, 0, 55, 66, {
        "history": "A 'restricted' espresso pulled with less water, the ristretto captures the sweetest, brightest first fractions of extraction.",
        "invented_by": "Italy",
        "taste_notes": ["Sweet", "Concentrated", "Syrupy", "Less bitter"],
        "ingredients": ["18g coffee", "18-20g water"],
        "recipe": ["Grind fine and dose 18g.", "Pull a short shot, stopping at ~20g.", "Serve in a warm demitasse."],
        "brewing_time": "15-20 seconds", "milk_ratio": "0%", "espresso_ratio": "100%",
        "calories": 2, "serving_temp": "68°C", "best_beans": "Dark-roast Arabica",
        "pairings": ["Dark chocolate"], "snacks": ["Cantucci"], "popularity": 68,
        "trivia": "By stopping early, ristretto avoids the bitter compounds that extract in the final seconds."}),

    _c("lungo", "Lungo", "Italy", IMG["machine"],
       "The long, bold pull.", 70, 0, 65, 72, {
        "history": "'Long' in Italian, the lungo uses more water and a longer extraction than espresso, drawing out bolder, more bitter notes.",
        "invented_by": "Italy",
        "taste_notes": ["Bold", "Bitter", "Roasty", "Full"],
        "ingredients": ["18g coffee", "80-120g water"],
        "recipe": ["Grind fine and dose 18g.", "Extract for 45-60 seconds to ~100g.", "Serve in a small cup."],
        "brewing_time": "45-60 seconds", "milk_ratio": "0%", "espresso_ratio": "100%",
        "calories": 5, "serving_temp": "70°C", "best_beans": "Dark-roast blend",
        "pairings": ["Almond cake"], "snacks": ["Biscotti"], "popularity": 65,
        "trivia": "A lungo is the opposite of a ristretto—more water and time pull out extra bitterness and caffeine."}),

    _c("cortado", "Cortado", "Spain", IMG["cup"],
       "Cut with warm milk.", 65, 50, 35, 64, {
        "history": "From Spain, 'cortado' means 'cut'—espresso cut with a small amount of warm, barely-foamed milk to soften acidity.",
        "invented_by": "Spain",
        "taste_notes": ["Balanced", "Smooth", "Warm", "Low-foam"],
        "ingredients": ["1 espresso shot", "60ml warm milk"],
        "recipe": ["Pull a single espresso.", "Steam milk with minimal foam.", "Pour 1:1 espresso to milk.", "Serve in a small glass."],
        "brewing_time": "2-3 minutes", "milk_ratio": "50%", "espresso_ratio": "50%",
        "calories": 60, "serving_temp": "65°C", "best_beans": "Medium-roast Arabica",
        "pairings": ["Churros", "Almond cookies"], "snacks": ["Tostada"], "popularity": 72,
        "trivia": "Unlike a flat white, a cortado is a strict 1:1 ratio with almost no foam at all."}),

    _c("vienna-coffee", "Vienna Coffee", "Austria", IMG["cup"],
       "Crowned with whipped cream.", 55, 40, 35, 60, {
        "history": "A Viennese café classic, two espresso shots are topped with a generous swirl of whipped cream instead of milk.",
        "invented_by": "Vienna, Austria",
        "taste_notes": ["Rich", "Creamy", "Indulgent", "Sweet"],
        "ingredients": ["2 espresso shots", "Whipped cream", "Cocoa/cinnamon"],
        "recipe": ["Pull a double espresso.", "Top with a thick layer of whipped cream.", "Dust with cocoa or cinnamon.", "Do not stir—sip through the cream."],
        "brewing_time": "3 minutes", "milk_ratio": "30%", "espresso_ratio": "40%",
        "calories": 180, "serving_temp": "68°C", "best_beans": "Medium-dark Arabica",
        "pairings": ["Sachertorte", "Apple strudel"], "snacks": ["Linzer cookies"], "popularity": 66,
        "trivia": "In Vienna, coffee house culture is so revered it's inscribed on UNESCO's heritage list."}),

    _c("red-eye", "Red Eye", "USA", IMG["machine"],
       "Drip coffee, extra fuel.", 85, 0, 60, 90, {
        "history": "A North American diner staple, the red eye adds a shot of espresso to a cup of drip coffee for a serious caffeine jolt.",
        "invented_by": "USA",
        "taste_notes": ["Strong", "Bitter", "Bold", "High-octane"],
        "ingredients": ["240ml drip coffee", "1 espresso shot"],
        "recipe": ["Brew a cup of drip coffee.", "Pull a single espresso.", "Add the shot to the drip coffee.", "Serve black."],
        "brewing_time": "3 minutes", "milk_ratio": "0%", "espresso_ratio": "15%",
        "calories": 10, "serving_temp": "72°C", "best_beans": "Dark-roast blend",
        "pairings": ["Bagel", "Donut"], "snacks": ["Pretzel"], "popularity": 62,
        "trivia": "It's named for the late-night 'red eye' flights it was designed to keep travellers awake through."}),

    _c("black-eye", "Black Eye", "USA", IMG["machine"],
       "Double the espresso jolt.", 92, 0, 68, 100, {
        "history": "The bolder sibling of the red eye, a black eye packs two espresso shots into drip coffee—maximum caffeine for the truly weary.",
        "invented_by": "USA",
        "taste_notes": ["Very strong", "Intense", "Bitter", "Electric"],
        "ingredients": ["240ml drip coffee", "2 espresso shots"],
        "recipe": ["Brew a cup of drip coffee.", "Pull a double espresso.", "Add both shots to the drip coffee.", "Serve black and brace yourself."],
        "brewing_time": "3-4 minutes", "milk_ratio": "0%", "espresso_ratio": "25%",
        "calories": 15, "serving_temp": "72°C", "best_beans": "Dark-roast blend",
        "pairings": ["Hearty breakfast"], "snacks": ["Muffin"], "popularity": 55,
        "trivia": "Three shots in drip coffee earns the dramatic name 'dead eye'—for emergencies only."}),
]


BREWING = [
    {"name": "Espresso Machine", "image": IMG["machine"], "difficulty": "Hard", "time": "30 sec",
     "equipment": ["Espresso machine", "Grinder", "Tamper", "Scale"], "flavor": "Intense, concentrated, syrupy with crema",
     "pros": ["Rich crema", "Fast", "Base for many drinks"], "cons": ["Expensive gear", "Steep learning curve"]},
    {"name": "French Press", "image": IMG["cup"], "difficulty": "Easy", "time": "4 min",
     "equipment": ["French press", "Coarse grinder", "Kettle"], "flavor": "Full-bodied, rich, textured",
     "pros": ["Simple", "No filters", "Full body"], "cons": ["Sediment", "Can over-extract"]},
    {"name": "Pour Over", "image": IMG["cup"], "difficulty": "Medium", "time": "3 min",
     "equipment": ["Dripper", "Paper filter", "Gooseneck kettle", "Scale"], "flavor": "Clean, bright, nuanced",
     "pros": ["Clarity of flavor", "Cheap", "Great control"], "cons": ["Needs technique", "Slower"]},
    {"name": "Aeropress", "image": IMG["machine"], "difficulty": "Easy", "time": "2 min",
     "equipment": ["Aeropress", "Paper filter", "Kettle", "Stirrer"], "flavor": "Smooth, clean, low-acid",
     "pros": ["Portable", "Fast", "Forgiving"], "cons": ["Single cup", "Manual pressure"]},
    {"name": "Cold Brew", "image": IMG["beans"], "difficulty": "Easy", "time": "12-18 hrs",
     "equipment": ["Jar or brewer", "Coarse grinder", "Filter"], "flavor": "Smooth, sweet, low-acid",
     "pros": ["Ultra smooth", "Batch friendly", "Low acidity"], "cons": ["Long wait", "Uses more coffee"]},
    {"name": "Drip Coffee", "image": IMG["cup"], "difficulty": "Easy", "time": "5 min",
     "equipment": ["Drip machine", "Paper filter", "Coffee"], "flavor": "Balanced, clean, everyday",
     "pros": ["Hands-off", "Consistent", "Makes batches"], "cons": ["Less character", "Machine dependent"]},
    {"name": "Turkish Pot", "image": IMG["beans"], "difficulty": "Medium", "time": "5 min",
     "equipment": ["Cezve", "Extra-fine grinder", "Heat source"], "flavor": "Thick, intense, unfiltered",
     "pros": ["Deep tradition", "Rich foam", "Minimal gear"], "cons": ["Grounds in cup", "Easy to boil over"]},
    {"name": "Moka Pot", "image": IMG["machine"], "difficulty": "Medium", "time": "5 min",
     "equipment": ["Moka pot", "Fine grinder", "Stove"], "flavor": "Bold, espresso-like, robust",
     "pros": ["Affordable", "Strong brew", "Stovetop"], "cons": ["Can taste bitter", "No real crema"]},
]


RECIPES = [
    {"name": "Classic Latte", "image": IMG["cup"], "difficulty": "Medium", "calories": 190,
     "ingredients": ["1 espresso shot", "240ml whole milk"],
     "preparation": ["Pull a fresh espresso.", "Steam milk to silky microfoam.", "Pour milk into the espresso.", "Finish with latte art."],
     "tips": ["Use cold, fresh milk", "Purge the steam wand first"], "serving": "In a 240ml glass or cup",
     "fun_fact": "The first latte art hearts appeared in 1980s Seattle."},
    {"name": "Cappuccino", "image": IMG["cup"], "difficulty": "Medium", "calories": 120,
     "ingredients": ["1 espresso shot", "60ml milk", "60ml foam"],
     "preparation": ["Pull an espresso.", "Steam milk to dense foam.", "Layer equal thirds.", "Dust with cocoa."],
     "tips": ["Aim for airy microfoam", "Serve immediately"], "serving": "In a 180ml cup",
     "fun_fact": "A 'dry' cappuccino has more foam and less milk."},
    {"name": "Chocolate Mocha", "image": IMG["cup"], "difficulty": "Easy", "calories": 290,
     "ingredients": ["1 espresso shot", "2 tbsp chocolate", "200ml milk", "Whipped cream"],
     "preparation": ["Melt chocolate into the espresso.", "Steam and add milk.", "Top with whipped cream.", "Shave chocolate on top."],
     "tips": ["Use real dark chocolate", "Balance sweetness"], "serving": "In a tall glass",
     "fun_fact": "Mocha beans naturally taste of chocolate—no cocoa needed."},
    {"name": "Cold Brew", "image": IMG["beans"], "difficulty": "Easy", "calories": 5,
     "ingredients": ["100g coarse coffee", "1L cold water"],
     "preparation": ["Combine coffee and water.", "Steep 16 hours in the fridge.", "Strain twice.", "Serve over ice."],
     "tips": ["Use a 1:10 ratio", "Dilute concentrate to taste"], "serving": "Over ice in a tall glass",
     "fun_fact": "Cold brew keeps fresh in the fridge for up to two weeks."},
    {"name": "Perfect Espresso", "image": IMG["machine"], "difficulty": "Hard", "calories": 3,
     "ingredients": ["18g coffee", "36g water"],
     "preparation": ["Grind fine and dose 18g.", "Tamp level.", "Extract 36g in 27 seconds.", "Serve at once."],
     "tips": ["Dial in your grind", "Warm the cup"], "serving": "In a demitasse",
     "fun_fact": "A good shot should have tiger-striped, golden crema."},
    {"name": "Caramel Macchiato", "image": IMG["machine"], "difficulty": "Easy", "calories": 250,
     "ingredients": ["1 espresso shot", "200ml milk", "Vanilla syrup", "Caramel drizzle"],
     "preparation": ["Add vanilla syrup to milk.", "Steam and pour the milk.", "Add the espresso shot.", "Drizzle caramel on top."],
     "tips": ["Pour espresso last for marbling", "Go easy on syrup"], "serving": "In a tall glass",
     "fun_fact": "The 'macchiato' name refers to the espresso marking the milk."},
    {"name": "Flat White", "image": IMG["cup"], "difficulty": "Medium", "calories": 110,
     "ingredients": ["2 ristretto shots", "120ml milk"],
     "preparation": ["Pull two ristretto shots.", "Steam milk to glossy microfoam.", "Pour with under 5mm foam.", "Serve small."],
     "tips": ["Use ristretto for sweetness", "Keep foam thin"], "serving": "In a 150ml cup",
     "fun_fact": "Australia and New Zealand still argue over who invented it."},
]


TIMELINE = [
    {"era": "9th Century", "title": "Ethiopian Origins", "text": "Legend tells of Kaldi, a goat herder in Ethiopia who noticed his goats dancing after eating red coffee cherries.", "image": IMG["cherries"]},
    {"era": "15th Century", "title": "Arabian Coffee Trade", "text": "Coffee cultivation and trade flourished in Yemen; Sufi monks brewed it to stay awake for prayers, and the first coffee houses appeared.", "image": IMG["beans"]},
    {"era": "16th Century", "title": "Ottoman Empire", "text": "Coffee spread through the Ottoman Empire, where lavish coffee houses became centres of conversation, music and politics.", "image": IMG["beans"]},
    {"era": "1901", "title": "Italian Espresso", "text": "Luigi Bezzera patents the espresso machine in Italy, launching the fast, concentrated coffee that defines modern café culture.", "image": IMG["machine"]},
    {"era": "1900s", "title": "Rise of Modern Cafés", "text": "Espresso bars and café culture bloomed across Europe and the Americas, making coffee a daily social ritual.", "image": IMG["cup"]},
    {"era": "1971", "title": "The Starbucks Era", "text": "The first Starbucks opens in Seattle, sparking a global wave that turned specialty coffee into a lifestyle.", "image": IMG["cup"]},
    {"era": "2000s+", "title": "Specialty Coffee Movement", "text": "The 'third wave' treats coffee like fine wine—celebrating origin, farmers, roast profiles and meticulous brewing.", "image": IMG["farm"]},
]


ORIGINS = [
    {"country": "Brazil", "x": 33, "y": 66, "production": "~40% of the world's coffee", "history": "The largest producer since the 1840s, powered by vast plantations.", "beans": "Santos, Cerrado, Bourbon", "type": "Arabica & Robusta"},
    {"country": "Colombia", "x": 27, "y": 55, "production": "3rd largest producer", "history": "High-altitude beans grown in the Andes since the 1800s.", "beans": "Supremo, Excelso", "type": "Washed Arabica"},
    {"country": "Ethiopia", "x": 57, "y": 55, "production": "Birthplace of coffee", "history": "The genetic home of Arabica, with centuries-old wild forests.", "beans": "Yirgacheffe, Sidamo, Harrar", "type": "Heirloom Arabica"},
    {"country": "Vietnam", "x": 76, "y": 58, "production": "2nd largest producer", "history": "French colonists introduced coffee in the 1850s; now a Robusta giant.", "beans": "Robusta, Culi", "type": "Robusta"},
    {"country": "India", "x": 69, "y": 57, "production": "Shade-grown specialty", "history": "Coffee smuggled in by Baba Budan in the 1600s; famous for monsooned beans.", "beans": "Monsooned Malabar, Mysore", "type": "Arabica & Robusta"},
    {"country": "Italy", "x": 51, "y": 42, "production": "Espresso capital", "history": "Not a grower but the spiritual home of espresso and café ritual.", "beans": "Dark-roast blends", "type": "Roasting tradition"},
    {"country": "Turkey", "x": 56, "y": 45, "production": "Heritage brewing", "history": "Home of the cezve and UNESCO-listed Turkish coffee culture.", "beans": "Fine-ground blends", "type": "Brewing tradition"},
]


STATS = [
    {"value": 2, "suffix": "B+", "label": "Cups consumed daily worldwide"},
    {"value": 70, "suffix": "+", "label": "Countries produce coffee"},
    {"value": 1000, "suffix": "+", "label": "Aroma compounds in a single cup"},
    {"value": 40, "suffix": "%", "label": "Of world supply grown in Brazil"},
]


GALLERY = [
    {"image": IMG["hero"], "caption": "The pour", "span": "tall"},
    {"image": IMG["beans"], "caption": "Roasted beans", "span": "normal"},
    {"image": IMG["cup"], "caption": "Latte art", "span": "normal"},
    {"image": IMG["machine"], "caption": "Espresso extraction", "span": "tall"},
    {"image": IMG["cherries"], "caption": "Coffee cherries", "span": "normal"},
    {"image": IMG["farm"], "caption": "Misty farms", "span": "wide"},
    {"image": IMG["cup"], "caption": "Morning ritual", "span": "normal"},
    {"image": IMG["beans"], "caption": "Freshly ground", "span": "normal"},
]


TESTIMONIALS = [
    {"name": "Amara Okafor", "role": "Coffee Blogger", "rating": 5, "text": "Coffee Atlas is the most beautiful coffee resource I've ever explored. The history timeline gave me chills.", "avatar": "https://i.pravatar.cc/150?img=32"},
    {"name": "Léa Moreau", "role": "Barista Champion", "rating": 5, "text": "Finally an educational site that respects the craft. The brewing guides are spot on and gorgeous.", "avatar": "https://i.pravatar.cc/150?img=45"},
    {"name": "Marco Bianchi", "role": "Café Owner, Rome", "rating": 5, "text": "As an Italian, I'm picky about espresso content. This nails it—accurate, elegant and a joy to browse.", "avatar": "https://i.pravatar.cc/150?img=12"},
    {"name": "Priya Nair", "role": "Home Brewer", "rating": 5, "text": "I went from instant coffee to pour-over thanks to these recipes. The animations make learning addictive.", "avatar": "https://i.pravatar.cc/150?img=20"},
]


FAQS = [
    {"q": "What exactly is an espresso?", "a": "Espresso is a concentrated coffee brewed by forcing hot water under high pressure through finely-ground beans, producing a small, intense shot topped with golden crema."},
    {"q": "What's the difference between a latte and a cappuccino?", "a": "A latte has more steamed milk and a thin layer of foam (creamy and mild), while a cappuccino uses equal parts espresso, milk and thick foam (lighter and airier)."},
    {"q": "What is the best coffee for beginners?", "a": "A latte or cappuccino is a gentle start thanks to the milk. If you prefer black coffee, try a pour-over or a mild medium-roast drip."},
    {"q": "How much caffeine is in a cup of coffee?", "a": "A shot of espresso has about 65mg, while a 240ml drip coffee has 95-120mg. Cold brew can be higher due to its concentration."},
    {"q": "Is coffee actually healthy?", "a": "In moderation, coffee is linked to antioxidants, improved focus and a lower risk of some diseases. Most adults handle up to 400mg of caffeine (about 4 cups) safely."},
    {"q": "What does 'single origin' mean?", "a": "Single-origin coffee comes from one specific place—a country, region or even a single farm—so it expresses a distinct, traceable flavour rather than a blend."},
    {"q": "Arabica vs Robusta—what's the difference?", "a": "Arabica is smoother, sweeter and more aromatic; Robusta is stronger, more bitter and higher in caffeine. Most specialty coffee is Arabica."},
    {"q": "What grind size should I use?", "a": "Match grind to method: extra-fine for Turkish and espresso, medium for pour-over and drip, and coarse for French press and cold brew."},
    {"q": "How should I store coffee beans?", "a": "Keep beans in an airtight, opaque container at room temperature, away from light, heat and moisture. Avoid the fridge—it introduces condensation."},
    {"q": "How long do roasted beans stay fresh?", "a": "Whole beans are best within 2-4 weeks of roasting. Once ground, coffee starts losing aroma within minutes, so grind just before brewing."},
    {"q": "What is crema?", "a": "Crema is the golden, foamy layer on top of a well-pulled espresso, formed by emulsified oils and carbon dioxide. It signals freshness and good extraction."},
    {"q": "Why is my coffee bitter?", "a": "Bitterness usually means over-extraction—too fine a grind, water that's too hot, or brewing too long. Coarsen the grind or shorten the brew."},
    {"q": "What is the most expensive coffee in the world?", "a": "Kopi Luwak from Indonesia, made from beans digested by civets, can sell for hundreds of dollars per pound—though ethical sourcing is a concern."},
    {"q": "Can I make café-quality coffee at home?", "a": "Absolutely. Fresh beans, a good burr grinder, correct ratios and clean equipment matter more than an expensive machine."},
    {"q": "What is the ideal water temperature for brewing?", "a": "Between 90-96°C (195-205°F). Too hot scorches the coffee and adds bitterness; too cool leaves it sour and under-extracted."},
    {"q": "What's the difference between cold brew and iced coffee?", "a": "Iced coffee is hot-brewed then chilled over ice, while cold brew is steeped in cold water for 12+ hours—resulting in a smoother, less acidic cup."},
]

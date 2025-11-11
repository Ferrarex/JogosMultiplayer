class game {
    constructor(path, name = path) {
        this.path = path;
        this.name = name;
    }
}

games = [
    new game("Terraria"),
    new game("DontStarve", "Don't Starve Together"),
    new game("EnterTheGungeon", "Enter the Gungeon"),
    new game("KingdomTwoCrowns", "Kingdom Two Crowns"),
    new game("StardewValley", "Stardew Valley"),
    new game("Minecraft"),
    new game("NewSuperMarioBrosU", "New Super Mario Bros. U"),
    new game("MarioKart8", "Mario Kart 8"),
    new game("SuperMario3DWorld", "Super Mario 3D World"),
    new game("Cuphead"),
    new game("CastleCrashers", "Castle Crashers"),
    new game("TheBindingOfIsaac", "The Binding Of Isaac: Repentance"),
    new game("AirConsole", "Air Console"),
    new game("OvercookedAllYouCanEat", "Overcooked! All You Can Eat"),
    new game("Brawlhalla"),
    new game("DonkeyKongTropicalFreeze", "Donkey Kong Country™: Tropical Freeze"),
    new game("YoshisWoollyWorld", "Yoshi's Woolly World"),
    new game("RaymanLegends", "Rayman Legends"),
    new game("BreadAndFred", "Bread and Fred"),
    new game("Broforce"),
    new game("MovingOut2", "Moving Out 2"),
    new game("LoversInADangerousSpacetime", "Lovers In a Dangerous Spacetime"),
    new game("PicoPark", "Pico Park"),
    new game("TowerfallAscension", "Towerfall - Ascension")
];

const container = document.body;

games.forEach(game => {
    const gamename = game.name;
    const gamepath = game.path;
    container.insertAdjacentHTML("beforeend", `
    <div class="game">
        <div class="preview">
            <img class='preview' src="games/${gamepath}/1">
            <img class='preview' src="games/${gamepath}/2">
            <img class='preview' src="games/${gamepath}/3">
            <img class='preview' src="games/${gamepath}/4">
        </div>
        <p>${gamename} <img class='icon' src="games/${gamepath}/icon"></p>
    </div>
  `);
});
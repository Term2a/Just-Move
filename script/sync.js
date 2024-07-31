let beats = 545;
let micro = 1 / 32;

function syncCheck() {
    if (isSynced === true) {
        setTimeout(() => {

            gameSpeed = 3;

            let musicSync = new Audio('./assets/Music.List/Haywyre - Let Me Hear That.mp3');
            musicSync.volume = .7;
            musicSync.play();

            setTimeout(() => {
                musicStart(); 
                addScore(65, 45, 28, 20);
                
            }, beats * 1.9);
        }, 15500);
    }
}

function syncArrow(num, multi = 1) {
    setTimeout(() => {
        createArrow(num); 
    }, beats * 1 * multi);
}

function musicStart() {
    // PRE-INTRO
    syncArrow(3, 1)
    syncArrow(2, 1.25)
    syncArrow(3, 1.5)
    syncArrow(2, 1.75)
    syncArrow(3, 2)
    syncArrow(2, 2.25)
    syncArrow(3, 2.5)
    syncArrow(2, 2.75)
    syncArrow(3, 3)
    syncArrow(2, 3.25)
    syncArrow(3, 3.5)
    
    // INTRO 1
    syncArrow(1, 5);
    syncArrow(1, 6);
    syncArrow(1, 7);
    syncArrow(1, 8);

    syncArrow(1, 9);
    syncArrow(1, 10);
    syncArrow(1, 11);
    syncArrow(1, 12);

    syncArrow(0, 13);
    syncArrow(1, 14);
    syncArrow(0, 15);
    syncArrow(1, 16);

    syncArrow(0, 17);
    syncArrow(1, 18);
    syncArrow(0, 19);
    syncArrow(1, 20);

    syncArrow(0, 21);
    syncArrow(2, 21.5);
    syncArrow(1, 22);
    syncArrow(3, 22.5);
    syncArrow(0, 23);
    syncArrow(2, 23.5);
    syncArrow(1, 24);
    syncArrow(3, 24.5);
    //
    syncArrow(0, 25);
    syncArrow(2, 25.5);
    syncArrow(1, 26);
    syncArrow(3, 26.5);
    syncArrow(0, 27);
    syncArrow(2, 27.5);
    syncArrow(1, 28);
    syncArrow(3, 28.5);
    
    syncArrow(0, 29);
    syncArrow(2, 29.5);
    syncArrow(1, 30.25);
    syncArrow(3, 30.5);
    syncArrow(0, 30.75);
    syncArrow(2, 31.25);
    syncArrow(1, 31.5);
    syncArrow(3, 31.75);
    syncArrow(0, 32.25);
    syncArrow(2, 32.5);
    syncArrow(1, 32.75);
    syncArrow(3, 33);

    syncArrow(0, 33.5);
    syncArrow(2, 33.75);
    syncArrow(1, 34);
    syncArrow(3, 34.5);
    syncArrow(0, 34.75);
    syncArrow(2, 35.25);
    syncArrow(1, 35.5);
    syncArrow(3, 35.75);

    // INTRO 2
    syncArrow(0, 37.5);
    syncArrow(2, 37.75);
    syncArrow(1, 38);
    syncArrow(3, 38.5);
    syncArrow(0, 38.75);
    syncArrow(2, 39.25);
    syncArrow(1, 39.5);
    syncArrow(3, 39.75);
    syncArrow(0, 40.25);
    syncArrow(2, 40.5);
    syncArrow(1, 40.75);

    syncArrow(3, 41.5);
    syncArrow(0, 42);
    syncArrow(2, 42.25);
    syncArrow(1, 42.5);
    syncArrow(3, 42.75);
    syncArrow(0, 43);
    syncArrow(2, 43.5);
    syncArrow(1, 43.75);
    syncArrow(3, 44.25);
    syncArrow(0, 44.5);
    syncArrow(2, 44.75);

    syncArrow(1, 45.5);
    syncArrow(3, 46);
    syncArrow(0, 46.25);
    syncArrow(2, 46.5);
    syncArrow(1, 46.75);
    syncArrow(3, 47.25);
    syncArrow(0, 47.75);
    syncArrow(2, 48.25);
    syncArrow(1, 48.5);
    syncArrow(3, 48.75);

    syncArrow(0, 49.25);
    syncArrow(2, 49.5);
    syncArrow(1, 49.75);
    syncArrow(3, 50);
    syncArrow(0, 50.5);
    syncArrow(2, 50.75);
    syncArrow(1, 51);
    syncArrow(3, 51.25);
    syncArrow(0, 52);
    syncArrow(2, 52.25);
    //
    syncArrow(1, 53.5);
    syncArrow(3, 53.75);
    syncArrow(0, 54);
    syncArrow(2, 54.25);
    syncArrow(1, 54.5);
    syncArrow(3, 54.75);
    syncArrow(0, 55.25);
    syncArrow(2, 55.5);
    syncArrow(1, 56);
    syncArrow(3, 56.25);
    syncArrow(0, 56.5);
    syncArrow(2, 56.75);

    syncArrow(1, 57.5);
    syncArrow(3, 58.25);
    syncArrow(0, 58.5);
    syncArrow(2, 58.75);
    syncArrow(1, 59);
    syncArrow(3, 59.5);
    syncArrow(0, 59.75);
    syncArrow(2, 60);
    syncArrow(1, 60.25);
    syncArrow(3, 60.5);
    syncArrow(0, 60.75);

    syncArrow(2, 61.5);
    syncArrow(1, 62.25);
    syncArrow(3, 62.5);
    syncArrow(0, 62.75);
    syncArrow(2, 63);
    syncArrow(1, 63.25);
    syncArrow(3, 63.5);
    syncArrow(0, 63.75);
    syncArrow(2, 64.25);
    syncArrow(1, 64.5);
    syncArrow(3, 64.75);

    syncArrow(0, 65);
    syncArrow(2, 65.25);
    syncArrow(1, 65.5);
    syncArrow(3, 65.62);
    syncArrow(0, 65.75);
    syncArrow(2, 65.87);
    syncArrow(1, 66);
    syncArrow(3, 66.25);
    syncArrow(0, 66.5);
    syncArrow(2, 66.75);
    syncArrow(1, 67);
    syncArrow(3, 67.12);
    syncArrow(0, 67.25);
    syncArrow(2, 67.37);
    syncArrow(1, 67.5);
    syncArrow(3, 67.62);
    syncArrow(0, 67.75);
    syncArrow(2, 67.87);
    syncArrow(1, 68);

    // INTRO 3
    syncArrow(3, 69);
    syncArrow(0, 69.5);
    syncArrow(2, 70.25);
    syncArrow(1, 71);
    syncArrow(3, 71.5);
    syncArrow(0, 72);
    syncArrow(2, 72.25);
    syncArrow(1, 72.5);
    syncArrow(3, 72.75);
    
    syncArrow(0, 73.5);
    syncArrow(2, 74.25);
    syncArrow(1, 75);
    syncArrow(3, 75.25);
    syncArrow(0, 75.5);
    syncArrow(2, 76);
    syncArrow(1, 76.25);
    syncArrow(3, 76.5);
    syncArrow(0, 76.75);

    syncArrow(2, 77.5);
    syncArrow(1, 78.25);
    syncArrow(3, 79);
    syncArrow(0, 79.25);
    syncArrow(2, 79.5);
    syncArrow(1, 80);
    syncArrow(3, 80.25);
    syncArrow(0, 80.5);
    syncArrow(2, 80.75);

    syncArrow(1, 81);
    syncArrow(3, 81.5);
    syncArrow(0, 81.75);
    syncArrow(2, 82);
    syncArrow(1, 82.25);
    syncArrow(3, 82.75);
    syncArrow(0, 83);
    syncArrow(2, 83.25);
    syncArrow(1, 83.5);
    syncArrow(3, 83.75);
    syncArrow(0, 84);
    syncArrow(2, 84.25);
    //
    syncArrow(1, 85);
    syncArrow(3, 85.5);
    syncArrow(0, 85.75);
    syncArrow(2, 86.25);
    syncArrow(1, 86.5);
    syncArrow(3, 87);
    syncArrow(0, 87.25);
    syncArrow(2, 87.5);
    syncArrow(1, 87.75);
    syncArrow(3, 88);
    syncArrow(0, 88.25);
    syncArrow(2, 88.5);
    syncArrow(1, 88.75);

    syncArrow(3, 89.5);
    syncArrow(0, 89.75);
    syncArrow(2, 90.25);
    syncArrow(1, 90.37);
    syncArrow(3, 90.5);
    syncArrow(0, 91);
    syncArrow(2, 91.5);
    syncArrow(1, 91.75);
    syncArrow(3, 92);
    syncArrow(0, 92.25);
    syncArrow(2, 92.5);
    syncArrow(1, 92.75);

    syncArrow(3, 93.25);
    syncArrow(0, 94);
    syncArrow(2, 94.25);
    syncArrow(1, 94.5);
    syncArrow(3, 94.75);
    syncArrow(0, 95.25);
    syncArrow(2, 95.5);
    syncArrow(1, 95.75);
    syncArrow(3, 96);
    syncArrow(0, 96.25);
    syncArrow(2, 96.5);
    syncArrow(1, 96.75);

    syncArrow(3, 97.25);
    syncArrow(0, 97.5);
    syncArrow(2, 97.75);
    syncArrow(1, 98);
    syncArrow(3, 98.25);
    syncArrow(0, 98.5);
    syncArrow(2, 98.75);
    syncArrow(1, 99.25);
    syncArrow(3, 99.37);
    syncArrow(0, 99.5);
    syncArrow(2, 99.75);
    syncArrow(1, 100);
    syncArrow(3, 100.25);
    syncArrow(0, 100.5);

    // BRIDGE
    syncArrow(2, 101);
    syncArrow(1, 102.5);
    syncArrow(3, 102.75);
    syncArrow(0, 103);
    syncArrow(1, 104.5);
    syncArrow(2, 104.75);

    syncArrow(3, 105);
    syncArrow(0, 106.5);
    syncArrow(1, 106.75);
    syncArrow(2, 107);
    syncArrow(3, 108.5);
    syncArrow(0, 108.75);
    
    syncArrow(2, 109);
    syncArrow(1, 110);
    syncArrow(3, 110.5);
    syncArrow(0, 110.75);
    syncArrow(2, 111);
    syncArrow(1, 112);
    syncArrow(3, 112.5);
    syncArrow(0, 112.75);

    syncArrow(2, 113);
    syncArrow(1, 114);
    syncArrow(3, 114.5);
    syncArrow(0, 114.75);
    syncArrow(1, 115);
    syncArrow(2, 115.5);
    syncArrow(3, 116);
    syncArrow(0, 116.5);
    syncArrow(2, 116.75);

    // BUILD UP
    syncArrow(1, 117);
    syncArrow(3, 117.25);
    syncArrow(0, 118);
    syncArrow(2, 118.5);
    syncArrow(1, 118.75);
    syncArrow(3, 119);
    syncArrow(0, 119.25);
    syncArrow(2, 120);
    syncArrow(1, 120.5);
    syncArrow(3, 120.75);

    syncArrow(0, 121);
    syncArrow(2, 121.25);
    syncArrow(1, 121.75);
    syncArrow(3, 122);
    syncArrow(0, 122.5);
    syncArrow(2, 122.75);
    syncArrow(1, 123);
    syncArrow(3, 123.25);
    syncArrow(0, 123.75);
    syncArrow(2, 124);
    syncArrow(1, 124.5);
    syncArrow(3, 124.75);

    syncArrow(0, 125);
    syncArrow(2, 125.25);
    syncArrow(1, 125.5);
    syncArrow(3, 125.75);
    syncArrow(0, 126);
    syncArrow(2, 126.25);
    syncArrow(1, 126.5);
    syncArrow(3, 126.75);
    syncArrow(0, 127);
    syncArrow(2, 127.25);
    syncArrow(1, 127.5);
    syncArrow(3, 127.75);
    syncArrow(0, 128);
    syncArrow(2, 128.25);
    syncArrow(1, 128.5);
    syncArrow(0, 128.75);

    syncArrow(3, 129);
    syncArrow(0, 130);
    syncArrow(2, 131);

    // DROP
    syncArrow(1, 133.5);
    syncArrow(3, 133.75);
    syncArrow(0, 134);
    syncArrow(2, 134.25);
    syncArrow(1, 134.5);
    syncArrow(3, 135.5);
    syncArrow(0, 135.75);
    syncArrow(2, 136);
    syncArrow(1, 136.25);
    syncArrow(3, 136.5);

    syncArrow(0, 137.5);
    syncArrow(2, 137.75);
    syncArrow(1, 138);
    syncArrow(3, 138.25);
    syncArrow(0, 138.5);
    syncArrow(2, 138.75);
    syncArrow(1, 139.5);
    syncArrow(3, 139.75);
    syncArrow(0, 140);
    syncArrow(2, 140.5);

    syncArrow(1, 141);
    syncArrow(3, 141.5);
    syncArrow(0, 141.75);
    syncArrow(2, 142);
    syncArrow(1, 142.25);
    syncArrow(3, 142.5);
    syncArrow(0, 142.75);
    syncArrow(2, 143.5);
    syncArrow(1, 143.75);
    syncArrow(3, 144);
    syncArrow(0, 144.25);
    syncArrow(2, 144.5);
    syncArrow(1, 144.75);

    syncArrow(3, 145.5);
    syncArrow(0, 145.75);
    syncArrow(2, 146);
    syncArrow(1, 146.12);
    syncArrow(3, 146.25);
    syncArrow(0, 146.37);
    syncArrow(2, 146.5);
    syncArrow(1, 146.62);
    syncArrow(3, 146.75);
    syncArrow(0, 146.87);
    syncArrow(2, 147);
    syncArrow(1, 147.25);
    syncArrow(3, 147.37);
    syncArrow(0, 147.5);
    syncArrow(2, 147.75);
    syncArrow(1, 148);
    syncArrow(3, 148.5);
    //
    syncArrow(0, 149.5);
    syncArrow(2, 149.75);
    syncArrow(1, 150);
    syncArrow(3, 150.25);
    syncArrow(0, 150.5);
    syncArrow(2, 151.5);
    syncArrow(1, 151.75);
    syncArrow(3, 152);
    syncArrow(0, 152.25);
    syncArrow(2, 152.5);

    syncArrow(1, 153.25);
    syncArrow(3, 153.5);
    syncArrow(0, 153.75);
    syncArrow(2, 154);
    syncArrow(1, 154.25);
    syncArrow(3, 154.5);
    syncArrow(0, 155.25);
    syncArrow(2, 155.5);
    syncArrow(1, 155.75);
    syncArrow(3, 156);
    syncArrow(0, 156.25);
    syncArrow(2, 156.5);
    syncArrow(1, 156.75);

    syncArrow(3, 157.5);
    syncArrow(0, 158);
    syncArrow(2, 158.25);
    syncArrow(1, 158.5);
    syncArrow(3, 158.75);
    syncArrow(0, 159.5);
    syncArrow(2, 160);
    syncArrow(1, 160.25);
    syncArrow(3, 160.5);
    syncArrow(0, 160.75);
    syncArrow(2, 160.87);

    syncArrow(1, 161);
    syncArrow(3, 161.25);
    syncArrow(0, 161.5);
    syncArrow(2, 161.75);
    syncArrow(1, 162.25);
    syncArrow(3, 162.5);
    syncArrow(0, 162.75);
    syncArrow(2, 163);
    syncArrow(1, 164);

    // DROP 2
    syncArrow(3, 166);
    syncArrow(0, 166.25);
    syncArrow(2, 166.75);
    syncArrow(1, 167.25);
    syncArrow(3, 167.5);
    syncArrow(0, 168);
    syncArrow(2, 168.5);
    syncArrow(1, 168.75);

    syncArrow(3, 169.5);
    syncArrow(0, 170);
    syncArrow(2, 170.5);
    syncArrow(1, 170.75);
    syncArrow(3, 171.5);
    syncArrow(0, 172);
    syncArrow(2, 172.25);

    syncArrow(1, 173);
    syncArrow(3, 174);
    syncArrow(0, 174.25);
    syncArrow(2, 174.75);
    syncArrow(1, 175.25);
    syncArrow(3, 175.5);
    syncArrow(0, 176);
    syncArrow(2, 176.75);

    syncArrow(1, 177.5);
    syncArrow(3, 178);
    syncArrow(0, 178.5);
    syncArrow(2, 178.75);
    syncArrow(1, 179.5);
    //
    syncArrow(3, 181);
    syncArrow(0, 182);
    syncArrow(2, 182.25);
    syncArrow(1, 182.75);
    syncArrow(3, 183.25);
    syncArrow(0, 183.5);
    syncArrow(2, 184);
    
    syncArrow(1, 186);
    syncArrow(3, 186.25);
    syncArrow(0, 186.75);
    syncArrow(2, 187.25);
    syncArrow(1, 187.5);
    syncArrow(3, 188);

    syncArrow(0, 189.5);
    syncArrow(2, 190);
    syncArrow(1, 190.25);
    syncArrow(3, 190.5);
    syncArrow(0, 190.75);
    syncArrow(2, 191.5);
    syncArrow(1, 192);
    syncArrow(3, 192.12);
    syncArrow(0, 192.25);
    syncArrow(2, 192.5);
    syncArrow(1, 192.75);

    syncArrow(3, 193.5);
    syncArrow(0, 194);
    syncArrow(2, 194.16);
    syncArrow(1, 194.32);
    syncArrow(3, 194.5);
    syncArrow(0, 194.75);
    syncArrow(2, 195);

    // BREAK
    syncArrow(1, 197);
    
    // NAS - not a sound

    syncArrow(3, 205);

    syncArrow(0, 209);
    syncArrow(2, 210.5);
    syncArrow(1, 210.75);
    syncArrow(3, 212);
    //
    syncArrow(0, 213);
    syncArrow(2, 213.25);
    syncArrow(1, 214.75);

    syncArrow(3, 217);
    syncArrow(0, 217.25);
    syncArrow(2, 218.75);
    syncArrow(1, 220.5);
    syncArrow(3, 220.62);
    syncArrow(0, 220.75);
    syncArrow(2, 220.87);

    syncArrow(1, 221);
    syncArrow(3, 221.5);
    syncArrow(0, 222);
    syncArrow(2, 222.5);
    syncArrow(1, 222.75);
    syncArrow(3, 223);
    syncArrow(0, 223.16);
    syncArrow(2, 223.32);
    syncArrow(1, 223.5);
    syncArrow(3, 223.75);
    syncArrow(0, 224);
    syncArrow(2, 224.25);
    syncArrow(1, 224.5);
    syncArrow(3, 224.75);

    syncArrow(0, 225.25);
    syncArrow(2, 225.5);
    syncArrow(1, 225.75);
    syncArrow(3, 226);
    syncArrow(0, 226.25);
    syncArrow(2, 226.5);
    syncArrow(1, 227);
    syncArrow(3, 227.25);
    syncArrow(0, 227.5);
    syncArrow(2, 227.62);
    syncArrow(1, 227.75);
    syncArrow(3, 228.25);
    syncArrow(0, 228.75);

    // BREAK 2
    syncArrow(2, 229);
    syncArrow(1, 229.25);
    syncArrow(3, 229.75);
    syncArrow(0, 230);
    syncArrow(2, 230.25);
    syncArrow(1, 230.37);
    syncArrow(3, 230.5);
    syncArrow(0, 230.75);
    syncArrow(2, 231.25);
    syncArrow(1, 231.75);
    syncArrow(3, 232);
    syncArrow(0, 232.5);
    syncArrow(2, 232.75);

    syncArrow(1, 233.25);
    syncArrow(3, 233.75);
    syncArrow(0, 234);
    syncArrow(2, 234.5);
    syncArrow(1, 234.62);
    syncArrow(3, 234.75);
    syncArrow(0, 235.25);
    syncArrow(2, 236);
    syncArrow(1, 236.25);
    syncArrow(3, 236.5);
    syncArrow(0, 236.75);

    syncArrow(2, 237.25);
    syncArrow(1, 237.75);
    syncArrow(3, 237.87);
    syncArrow(0, 238);
    syncArrow(2, 238.5);
    syncArrow(1, 238.62);
    syncArrow(3, 238.75);
    syncArrow(0, 239.25);
    syncArrow(2, 239.75);
    syncArrow(1, 240);
    syncArrow(3, 240.5);
    syncArrow(0, 240.75);

    syncArrow(2, 241.25);
    syncArrow(1, 242);
    syncArrow(3, 242.25);
    syncArrow(0, 242.5);
    syncArrow(2, 242.62);
    syncArrow(1, 242.75);
    syncArrow(3, 242.87);
    syncArrow(0, 243.25);
    syncArrow(2, 243.37);
    syncArrow(1, 243.5);
    syncArrow(3, 243.62);
    syncArrow(0, 243.75);
    syncArrow(2, 243.87);
    syncArrow(1, 244);
    syncArrow(3, 244.12);
    syncArrow(0, 244.25);
    syncArrow(2, 244.5);
    syncArrow(1, 244.75);
    //
    syncArrow(3, 245);
    syncArrow(0, 245.75);
    syncArrow(2, 246.5);
    syncArrow(1, 246.75);
    syncArrow(3, 247);
    syncArrow(0, 247.25);
    syncArrow(2, 247.5);
    syncArrow(1, 247.75);
    syncArrow(3, 248);
    syncArrow(0, 248.25);
    syncArrow(2, 248.5);
    syncArrow(1, 248.75);
    
    syncArrow(3, 249);
    syncArrow(0, 249.25);
    syncArrow(2, 249.75);
    syncArrow(1, 250);
    syncArrow(3, 250.5);
    syncArrow(0, 251);
    syncArrow(2, 251.12);
    syncArrow(1, 251.25);
    syncArrow(3, 251.37);
    syncArrow(0, 251.75);
    syncArrow(2, 252.25);
    syncArrow(1, 252.75);

    syncArrow(3, 253.25);
    syncArrow(0, 254);
    syncArrow(2, 254.25);
    syncArrow(1, 254.5);
    syncArrow(3, 254.75);
    syncArrow(0, 255);
    syncArrow(2, 255.5);
    syncArrow(1, 256.25);

    syncArrow(3, 257);
    syncArrow(0, 257.75);
    syncArrow(2, 258.5);
    syncArrow(1, 260.5);
    syncArrow(3, 260.75);

    // BRIDGE 2
    syncArrow(0, 261);
    syncArrow(2, 262.5);
    syncArrow(1, 262.75);
    syncArrow(3, 263);
    syncArrow(0, 264.5);
    syncArrow(2, 264.75);

    syncArrow(1, 265);
    syncArrow(3, 266.5);
    syncArrow(0, 266.75);
    syncArrow(2, 267);
    syncArrow(1, 268.5);
    syncArrow(3, 268.75);

    syncArrow(0, 269);
    syncArrow(2, 269.5);
    syncArrow(1, 269.75);
    syncArrow(3, 270);
    syncArrow(0, 270.25);
    syncArrow(2, 270.75);
    syncArrow(1, 271);
    syncArrow(3, 271.5);
    syncArrow(0, 271.75);
    syncArrow(2, 272);
    syncArrow(1, 272.25);
    syncArrow(3, 272.5);
    syncArrow(0, 272.75);

    syncArrow(2, 273);
    syncArrow(1, 273.5);
    syncArrow(3, 273.75);
    syncArrow(0, 274);
    syncArrow(2, 274.25);
    syncArrow(1, 274.75);
    syncArrow(3, 275);
    syncArrow(0, 275.5);
    syncArrow(2, 275.75);
    syncArrow(1, 276);
    syncArrow(3, 276.25);
    syncArrow(0, 276.5);
    syncArrow(2, 276.75);

    // BUILD UP 2
    syncArrow(1, 277);
    syncArrow(3, 277.25);
    syncArrow(0, 277.5);
    syncArrow(2, 277.75);
    syncArrow(1, 278);
    syncArrow(3, 278.25);
    syncArrow(0, 278.5);
    syncArrow(2, 278.75);
    syncArrow(1, 279);
    syncArrow(3, 279.25);
    syncArrow(0, 279.5);
    syncArrow(2, 279.75);
    syncArrow(1, 280);
    syncArrow(3, 280.25);
    syncArrow(0, 280.5);
    syncArrow(2, 280.75);

    syncArrow(1, 281);
    syncArrow(3, 281.25);
    syncArrow(0, 281.5);
    syncArrow(2, 281.75);
    syncArrow(1, 282);
    syncArrow(3, 282.25);
    syncArrow(0, 282.5);
    syncArrow(2, 282.75);
    syncArrow(1, 283);
    syncArrow(3, 283.25);
    syncArrow(0, 283.5);
    syncArrow(2, 283.75);
    syncArrow(1, 284);
    syncArrow(3, 284.25);
    syncArrow(0, 284.5);
    syncArrow(2, 284.62);
    syncArrow(1, 284.75);
    syncArrow(3, 284.87);

    syncArrow(0, 285);
    syncArrow(2, 285.12);
    syncArrow(1, 285.25);
    syncArrow(3, 285.37);
    syncArrow(0, 285.5);
    syncArrow(2, 285.62);
    syncArrow(1, 285.75);
    syncArrow(3, 285.87);
    syncArrow(0, 286);
    syncArrow(2, 286.12);
    syncArrow(1, 286.25);
    syncArrow(3, 286.37);
    syncArrow(0, 286.5);
    syncArrow(2, 286.62);
    syncArrow(1, 286.75);
    syncArrow(3, 286.87);
    syncArrow(0, 287);
    syncArrow(2, 287.12);
    syncArrow(1, 287.25);
    syncArrow(3, 287.37);
    syncArrow(0, 287.5);
    syncArrow(2, 287.62);
    syncArrow(1, 287.75);
    syncArrow(3, 287.87);
    syncArrow(0, 288);
    syncArrow(2, 288.12);
    syncArrow(1, 288.25);
    syncArrow(3, 288.37);
    syncArrow(0, 288.5);
    syncArrow(2, 288.62);
    syncArrow(1, 288.75);
    syncArrow(3, 288.87);

    syncArrow(0, 289);
    syncArrow(2, 289.12);
    syncArrow(1, 289.25);
    syncArrow(3, 289.37);
    syncArrow(0, 289.5);
    syncArrow(2, 289.62);
    syncArrow(1, 289.75);
    syncArrow(3, 289.87);
    syncArrow(0, 290);
    syncArrow(2, 290.12);
    syncArrow(1, 290.25);
    syncArrow(3, 290.37);
    syncArrow(0, 290.5);
    syncArrow(2, 290.62);
    syncArrow(1, 290.75);
    syncArrow(3, 290.87);

    // DROP 3
    syncArrow(0, 293.5);
    syncArrow(2, 293.75);
    syncArrow(1, 294);
    syncArrow(3, 294.25);
    syncArrow(0, 294.5);
    syncArrow(2, 295.5);
    syncArrow(1, 295.75);
    syncArrow(3, 296);
    syncArrow(0, 296.25);
    syncArrow(2, 296.5);
    
    syncArrow(1, 297.5);
    syncArrow(3, 297.75);
    syncArrow(0, 298);
    syncArrow(2, 298.25);
    syncArrow(1, 298.5);
    syncArrow(3, 299.5);
    syncArrow(0, 299.75);
    syncArrow(2, 300);
    syncArrow(1, 300.25);
    syncArrow(3, 300.5);
    syncArrow(0, 300.75);
    syncArrow(2, 300.87);
    
    syncArrow(1, 301);
    syncArrow(3, 301.5);
    syncArrow(0, 301.75);
    syncArrow(2, 302);
    syncArrow(1, 302.25);
    syncArrow(3, 302.5);
    syncArrow(0, 303.5);
    syncArrow(2, 303.75);
    syncArrow(1, 304);
    syncArrow(3, 304.25);
    syncArrow(0, 304.5);

    syncArrow(2, 305.25);
    syncArrow(1, 305.5);
    syncArrow(3, 305.75);
    syncArrow(0, 305.87);
    syncArrow(2, 306);
    syncArrow(1, 306.12);
    syncArrow(3, 306.25);
    syncArrow(0, 306.37);
    syncArrow(2, 306.5);
    syncArrow(1, 306.62);
    syncArrow(3, 306.75);
    syncArrow(0, 306.87);
    syncArrow(2, 307);
    syncArrow(1, 307.12);
    syncArrow(3, 307.25);
    syncArrow(0, 307.37);
    syncArrow(2, 307.5);
    syncArrow(1, 307.62);
    syncArrow(3, 307.75);
    syncArrow(0, 307.87);
    syncArrow(2, 308);
    syncArrow(1, 308.12);
    syncArrow(3, 308.25);
    syncArrow(0, 308.37);
    syncArrow(2, 308.5);
    syncArrow(1, 308.62);
    syncArrow(3, 308,75);
    syncArrow(0, 308.87);
    //
    syncArrow(2, 309.25);
    syncArrow(1, 309.5);
    syncArrow(3, 309.75);
    syncArrow(0, 310);
    syncArrow(2, 310.25);
    syncArrow(1, 310.5);
    syncArrow(3, 310.75);
    syncArrow(0, 311.5);
    syncArrow(2, 311.75);
    syncArrow(1, 312);
    syncArrow(3, 312.25);
    syncArrow(0, 312.5);
    syncArrow(2, 312.75);
    syncArrow(1, 312.87);

    syncArrow(3, 313.5);
    syncArrow(0, 313.75);
    syncArrow(2, 314);
    syncArrow(1, 314.25);
    syncArrow(3, 314.5);
    syncArrow(0, 314.75);
    syncArrow(2, 315.5);
    syncArrow(1, 315.75);
    syncArrow(3, 316);
    syncArrow(0, 316.25);
    syncArrow(2, 316.5);
    syncArrow(1, 316.75);

    syncArrow(3, 317.75);
    syncArrow(0, 318);
    syncArrow(2, 318.25);
    syncArrow(1, 318.5);
    syncArrow(3, 318.75);
    syncArrow(0, 319.25);
    syncArrow(2, 319.5);
    syncArrow(1, 320);
    syncArrow(3, 320.25);
    syncArrow(0, 320.5);
    syncArrow(2, 320.75);

    syncArrow(1, 321);
    syncArrow(3, 321.25);
    syncArrow(0, 321.5);
    syncArrow(2, 321.75);
    syncArrow(1, 322.5);
    syncArrow(3, 322.75);
    syncArrow(0, 323);
    syncArrow(2, 323.25);
    syncArrow(1, 323.5);
    syncArrow(3, 323.62);
    syncArrow(0, 323.75);
    syncArrow(2, 323.87);
    syncArrow(1, 324.5);
    syncArrow(3, 324.62);
    syncArrow(0, 324.75);
    syncArrow(2, 324.87);

    // DROP 4
    syncArrow(1, 325);
    syncArrow(3, 325.25);
    syncArrow(0, 325.5);
    syncArrow(2, 326);
    syncArrow(1, 326.5);
    syncArrow(3, 326.75);
    syncArrow(0, 326.87);
    syncArrow(2, 327);
    syncArrow(1, 327.25);
    syncArrow(3, 327.5);
    syncArrow(0, 328);
    syncArrow(2, 328.5);
    syncArrow(1, 328.62);
    syncArrow(3, 328.75);
    syncArrow(0, 328.87);

    syncArrow(2, 329);
    syncArrow(1, 329.25);
    syncArrow(3, 329.5);
    syncArrow(0, 330);
    syncArrow(2, 330.25);
    syncArrow(1, 330.5);
    syncArrow(3, 330.75);
    syncArrow(0, 330.87);
    syncArrow(2, 331);
    syncArrow(1, 331.25);
    syncArrow(3, 331.5);
    syncArrow(0, 331.75);
    syncArrow(2, 332);
    syncArrow(1, 332.25);
    syncArrow(3, 332.5);
    syncArrow(0, 332.75);

    syncArrow(2, 333);
    syncArrow(1, 333.25);
    syncArrow(3, 333.5);
    syncArrow(0, 334);
    syncArrow(2, 334.);
    syncArrow(1, 334.75);
    syncArrow(3, 335.25);
    syncArrow(0, 335.5);
    syncArrow(2, 335.75);
    syncArrow(1, 336);
    syncArrow(3, 336.12);
    syncArrow(0, 336.25);
    syncArrow(2, 336.37);
    syncArrow(1, 336.5);
    syncArrow(3, 336.75);

    syncArrow(2, 337.25);
    syncArrow(1, 337.5);
    syncArrow(3, 338);
    syncArrow(0, 338.5);
    syncArrow(2, 338.75);
    syncArrow(1, 339);
    syncArrow(3, 339.25);
    syncArrow(0, 339.5);
    syncArrow(2, 339.75);
    syncArrow(1, 340);
    syncArrow(3, 340.25);
    syncArrow(0, 340.5);
    syncArrow(2, 340.75);
    syncArrow(1, 340.87);
    //
    syncArrow(3, 341);
    syncArrow(0, 341.25);
    syncArrow(2, 341.5);
    syncArrow(1, 341.75);
    syncArrow(3, 342);
    syncArrow(0, 342.25);
    syncArrow(2, 342.5);
    syncArrow(1, 342.75);
    syncArrow(3, 343);
    syncArrow(0, 343.25);
    syncArrow(2, 343.5);
    syncArrow(1, 343.75);
    syncArrow(3, 344);
    syncArrow(0, 344.25);
    syncArrow(2, 344.5);
    syncArrow(1, 344.62);
    syncArrow(3, 344.75);
    syncArrow(0, 344.87);

    syncArrow(2, 345);
    syncArrow(1, 345.75);
    syncArrow(3, 345.87);
    syncArrow(0, 346);
    syncArrow(2, 346.12);
    syncArrow(1, 346.25);
    syncArrow(3, 346.37);
    syncArrow(0, 346.5);
    syncArrow(2, 346.62);
    syncArrow(1, 346.75);
    syncArrow(3, 346.87);
    syncArrow(0, 347);
    syncArrow(2, 347.5);
    syncArrow(1, 347.75);
    syncArrow(3, 348);
    syncArrow(0, 348.25);
    syncArrow(2, 348.75);

    syncArrow(1, 349.25);
    syncArrow(3, 349.5);
    syncArrow(0, 350);
    syncArrow(2, 350.25);
    syncArrow(1, 350.75);
    syncArrow(3, 351.25);
    syncArrow(0, 351.5);
    syncArrow(2, 351.75);
    syncArrow(1, 352);
    syncArrow(3, 352.25);
    syncArrow(0, 352.75);

    syncArrow(2, 353);
    syncArrow(1, 353.5);
    syncArrow(3, 353.75);
    syncArrow(0, 354);
    syncArrow(2, 354.5);
    syncArrow(1, 354.75);
    syncArrow(3, 355);
    syncArrow(0, 356);
    
    syncArrow(2, 357);
}
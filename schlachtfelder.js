//  Unten - ein Rollenspiel im Retrodesign
//
//   Copyright (C) 2017-2018 Heiko Wolf
//
//   This program is free software; you can redistribute it and/or modify
//   it under the terms of the GNU General Public License As published by
//   the Free Software Foundation; either version 2 of the License, or
//   (at your option) any later version.
//
//   This program is distributed in the hope that it will be useful,
//   but WITHOUT ANY WARRANTY; without even the implied warranty of
//   MERCHANTABILITY Or FITNESS For A PARTICULAR PURPOSE.  See the
//   GNU General Public License For more details.
//
//   You should have received a copy of the GNU General Public License along
//   With this program; if not, write to the Free Software Foundation, Inc.,
//   51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
//
//   Kontakt: unten@skywave-2000.de

function c_schlachtfelder ()
{
  this.v_etage = [];
  this.v_erledigt = [];    //0 - nein, 1 - ja
}

c_schlachtfelder.prototype.p_feld = function (v_sx, v_sy, v_snr)
{
  if ((o_charakter.v_mxk == v_sx) && (o_charakter.v_myk == v_sy))
  {
    console.log ("Starte mit Schlachtfeld");

    if (o_schlachtfelder.v_erledigt [v_snr] == 0)
    {
      console.log ("1");
      v_schlachtfeld = v_snr;
      o_kampf.p_start ("kein");
    }
    else if (o_schlachtfelder.v_erledigt [v_snr] == 1)
    {
      o_fenster.p_drawWindow ();
      o_fenster.p_writeText (v_kampftexte [3], "", "", "", "");
    }
  }
}

c_schlachtfelder.prototype.p_init = function ()
{
  for (let v_i = 1; v_i <= 512; v_i++) {this.v_erledigt [v_i] = 0; }

  // Schlachfelder Lvl 2
  for (let v_i = 1; v_i < 14; v_i++) { this.v_etage [v_i] = 1; }

  // Schlachtfelder Lvl 3
  for (let v_i = 14; v_i < 29; v_i++) { this.v_etage [v_i] = 2; }

  //Schlachfelder Lvl 4
  for (let v_i = 29; v_i < 49; v_i++) { this.v_etage [v_i] = 2; }

  //Schlachtfelder Lvl 5
  for (let v_i = 49; v_i < 62; v_i++) { this.v_etage [v_i] = 3; }

  //Schlachtfelder Lvl 6
  for (let v_i = 62; v_i < 72; v_i++) { this.v_etage [v_i] = 3; }
  
  //Schlachtfelder Lvl 7
  for (let v_i = 72; v_i < 83; v_i++) { this.v_etage [v_i] = 3; }

  //Schlachtfelder Lvl 8
  for (let v_i = 83; v_i < 89; v_i++) { this.v_etage [v_i] = 3; }

  //Schlachtfelder Lvl 9
  for (let v_i = 89; v_i < 98; v_i++) { this.v_etage [v_i] = 4; }

  //Schlachtfeld lvl 10
  this.v_etage [98] = 1;

  //Schlachfelder lvl 11
  for (let v_i = 99; v_i < 106; v_i++) { this.v_etage [v_i] = 2; }

  //Schlachtfelder lvl 12 und 13
  for (let v_i = 106; v_i < 116; v_i++) { this.v_etage [v_i] = 3; }

  //lvl 14
  for (let v_i = 116; v_i < 123; v_i++) { this.v_etage [v_i] = 4; }

  //lvl 15
  this.v_etage [123] = 1;

  //lvl 16-20
  for (let v_i = 124; v_i < 149; v_i++) { this.v_etage [v_i] = 3; }

  //lvl 21
  for (let v_i = 149; v_i < 156; v_i++) { this.v_etage [v_i] = 4; }

  //lvl 22
  this.v_etage [156] = 1; 

  //lvl 23
  for (let v_i = 157; v_i < 163; v_i++) { this.v_etage [v_i] = 3; }

  //lvl 24
  for (let v_i = 164; v_i < 168; v_i++) { this.v_etage [v_i] = 3; }

  //25
  this.v_etage [169] = 1; 

  //26
  for (let v_i = 170; v_i < 176; v_i++) { this.v_etage [v_i] = 3; }

  //27
  for (let v_i = 176; v_i <= 180; v_i++) { this.v_etage [v_i] = 3; }

  //28
  for (let v_i = 181; v_i <= 189; v_i++) { this.v_etage [v_i] = 3; }

  //29
  for (let v_i = 190; v_i <= 196; v_i++) { this.v_etage [v_i] = 3; }

  //30
  for (let v_i = 197; v_i <= 202; v_i++) { this.v_etage [v_i] = 3; }

  //31
  this.v_etage [203] = 1;

  //33
  for (let v_i = 204; v_i <= 214; v_i++) { this.v_etage [v_i] = 2; }

  //34
  for (let v_i = 215; v_i <= 218; v_i++) { this.v_etage [v_i] = 3; }

  //35
  for (let v_i = 219; v_i <= 223; v_i++) { this.v_etage [v_i] = 3; }

  //36
  for (let v_i = 224; v_i <= 229; v_i++) { this.v_etage [v_i] = 3; }

  //37
  for (let v_i = 230; v_i <= 240; v_i++) { this.v_etage [v_i] = 3; }
  
  //38
  for (let v_i = 241; v_i <= 244; v_i++) { this.v_etage [v_i] = 3; }
  
  //39
  for (let v_i = 245; v_i <= 249; v_i++) { this.v_etage [v_i] = 4; }
  
  //40
   this.v_etage [250] = 1;
   
   //41
   for (let v_i = 251; v_i <= 263; v_i++) { this.v_etage [v_i] = 2; }
   
   //42
   for (let v_i = 264; v_i <= 274; v_i++) { this.v_etage [v_i] = 2; }

   //43
   for (let v_i = 275; v_i <= 289; v_i++) { this.v_etage [v_i] = 3; }
}

c_schlachtfelder.prototype.p_clean = function (xk, yk)
{
  v_statuscanvas_context.fillStyle = "#000000";
  v_statuscanvas_context.fillRect (xk * 20 + 1, yk * 20 + 1 , 18, 18);
}

c_schlachtfelder.prototype.p_status = function ()
{
  document.getElementById ("statuscanvas").style.visibility = "visible";

  if (v_lvl == 2)
  {
    if (this.v_erledigt [1] == 1) { this.p_clean (19, 7); }
    if (this.v_erledigt [2] == 1) { this.p_clean (15, 12); }
    if (this.v_erledigt [3] == 1) { this.p_clean (7, 8); }
    if (this.v_erledigt [4] == 1) { this.p_clean (7, 12); }
    if (this.v_erledigt [5] == 1) { this.p_clean (13, 14); }
    if (this.v_erledigt [6] == 1) { this.p_clean (19, 16); }
    if (this.v_erledigt [7] == 1) { this.p_clean (17, 19); }
    if (this.v_erledigt [8] == 1) { this.p_clean (13, 18); }
    if (this.v_erledigt [9] == 1) { this.p_clean (7, 16); }
    if (this.v_erledigt [10] == 1) { this.p_clean (4, 19); }
    if (this.v_erledigt [11] == 1) { this.p_clean (1, 14); }
    if (this.v_erledigt [12] == 1) { this.p_clean (1, 7); }
    if (this.v_erledigt [13] == 1) { this.p_clean (11, 6); }
  }
  else if (v_lvl == 3)
  {
    if (this.v_erledigt [14] == 1) { this.p_clean (10, 5); }
    if (this.v_erledigt [15] == 1) { this.p_clean (16, 5); }
    if (this.v_erledigt [16] == 1) { this.p_clean (18, 7); }
    if (this.v_erledigt [17] == 1) { this.p_clean (9, 7); }
    if (this.v_erledigt [18] == 1) { this.p_clean (9, 9); }
    if (this.v_erledigt [19] == 1) { this.p_clean (16, 15); }
    if (this.v_erledigt [20] == 1) { this.p_clean (16, 17); }
    if (this.v_erledigt [21] == 1) { this.p_clean (18, 19); }
    if (this.v_erledigt [22] == 1) { this.p_clean (9, 19); }
    if (this.v_erledigt [23] == 1) { this.p_clean (2, 19); }
    if (this.v_erledigt [24] == 1) { this.p_clean (3, 17); }
    if (this.v_erledigt [25] == 1) { this.p_clean (4, 14); }
    if (this.v_erledigt [26] == 1) { this.p_clean (2, 12); }
    if (this.v_erledigt [27] == 1) { this.p_clean (2, 10); }
    if (this.v_erledigt [28] == 1) { this.p_clean (3, 4); }
  }
  else if (v_lvl == 4)
  {
    if (this.v_erledigt [29] == 1) { this.p_clean (4, 4); }
    if (this.v_erledigt [30] == 1) { this.p_clean (2, 4); }
    if (this.v_erledigt [31] == 1) { this.p_clean (2, 1); }
    if (this.v_erledigt [32] == 1) { this.p_clean (8, 1); }
    if (this.v_erledigt [33] == 1) { this.p_clean (9, 4); }
    if (this.v_erledigt [34] == 1) { this.p_clean (7, 9); }
    if (this.v_erledigt [35] == 1) { this.p_clean (4, 11); }
    if (this.v_erledigt [36] == 1) { this.p_clean (1, 12); }
    if (this.v_erledigt [37] == 1) { this.p_clean (1, 18); }
    if (this.v_erledigt [38] == 1) { this.p_clean (6, 18); }
    if (this.v_erledigt [39] == 1) { this.p_clean (11, 15); }
    if (this.v_erledigt [40] == 1) { this.p_clean (11, 8); }
    if (this.v_erledigt [41] == 1) { this.p_clean (11, 2); }
    if (this.v_erledigt [42] == 1) { this.p_clean (15, 1); }
    if (this.v_erledigt [43] == 1) { this.p_clean (19, 6); }
    if (this.v_erledigt [44] == 1) { this.p_clean (14, 8); }
    if (this.v_erledigt [45] == 1) { this.p_clean (17, 12); }
    if (this.v_erledigt [46] == 1) { this.p_clean (15, 16); }
    if (this.v_erledigt [47] == 1) { this.p_clean (19, 16); }
    if (this.v_erledigt [48] == 1) { this.p_clean (16, 19); }
  }
  else if (v_lvl == 5)
  {
    if (this.v_erledigt [49] == 1) { this.p_clean (16, 17); }
    if (this.v_erledigt [50] == 1) { this.p_clean (8, 17); }
    if (this.v_erledigt [51] == 1) { this.p_clean (6, 14); }
    if (this.v_erledigt [52] == 1) { this.p_clean (6, 11); }
    if (this.v_erledigt [53] == 1) { this.p_clean (3, 9); }
    if (this.v_erledigt [54] == 1) { this.p_clean (3, 7); }
    if (this.v_erledigt [55] == 1) { this.p_clean (8, 8); }
    if (this.v_erledigt [56] == 1) { this.p_clean (12, 8); }
    if (this.v_erledigt [57] == 1) { this.p_clean (13, 4); }
    if (this.v_erledigt [58] == 1) { this.p_clean (3, 4); }
    if (this.v_erledigt [59] == 1) { this.p_clean (1, 3); }
    if (this.v_erledigt [60] == 1) { this.p_clean (6, 1); }
    if (this.v_erledigt [61] == 1) { this.p_clean (13, 2); }
  }
  else if (v_lvl == 6)
  {
     if (this.v_erledigt [62] == 1) { this.p_clean (9, 1); }
     if (this.v_erledigt [63] == 1) { this.p_clean (9, 3); }
     if (this.v_erledigt [64] == 1) { this.p_clean (9, 5); }
     if (this.v_erledigt [65] == 1) { this.p_clean (9, 7); }
     if (this.v_erledigt [66] == 1) { this.p_clean (9, 9); }
     if (this.v_erledigt [67] == 1) { this.p_clean (9, 11); }
     if (this.v_erledigt [68] == 1) { this.p_clean (9, 13); }
     if (this.v_erledigt [69] == 1) { this.p_clean (9, 15); }
     if (this.v_erledigt [70] == 1) { this.p_clean (9, 17); }
     if (this.v_erledigt [71] == 1) { this.p_clean (9, 19); }
  }
  else if (v_lvl == 7)
  {
     if (this.v_erledigt [72] == 1) { this.p_clean (17, 16); }
     if (this.v_erledigt [73] == 1) { this.p_clean (15, 9); }
     if (this.v_erledigt [74] == 1) { this.p_clean (10, 9); }
     if (this.v_erledigt [75] == 1) { this.p_clean (8, 11); }
     if (this.v_erledigt [76] == 1) { this.p_clean (11, 13); }
     if (this.v_erledigt [77] == 1) { this.p_clean (14, 15); }
     if (this.v_erledigt [78] == 1) { this.p_clean (10, 17); }
     if (this.v_erledigt [79] == 1) { this.p_clean (2, 16); }
     if (this.v_erledigt [80] == 1) { this.p_clean (2, 4); }
     if (this.v_erledigt [81] == 1) { this.p_clean (6, 3); }
     if (this.v_erledigt [82] == 1) { this.p_clean (13, 1); }
  }
  else if (v_lvl == 8)
  {
    if (this.v_erledigt [83] == 1) { this.p_clean (19, 4); }
    if (this.v_erledigt [84] == 1) { this.p_clean (17, 6); }
    if (this.v_erledigt [85] == 1) { this.p_clean (12, 6); }
    if (this.v_erledigt [86] == 1) { this.p_clean (10, 8); }
    if (this.v_erledigt [87] == 1) { this.p_clean (10, 11); }
    if (this.v_erledigt [88] == 1) { this.p_clean (10, 15); }
  }
  else if (v_lvl == 9)
  {
    if (this.v_erledigt [89] == 1) { this.p_clean (12, 18); }
    if (this.v_erledigt [90] == 1) { this.p_clean (4, 18); }
    if (this.v_erledigt [91] == 1) { this.p_clean (1, 15); }
    if (this.v_erledigt [92] == 1) { this.p_clean (1, 12); }
    if (this.v_erledigt [93] == 1) { this.p_clean (5, 9); }
    if (this.v_erledigt [94] == 1) { this.p_clean (1, 7); }
    if (this.v_erledigt [95] == 1) { this.p_clean (1, 4); }
    if (this.v_erledigt [96] == 1) { this.p_clean (4, 2); }
    if (this.v_erledigt [97] == 1) { this.p_clean (12, 2); }
  }
  else if (v_lvl == 10)
  {
    if (this.v_erledigt [98] == 1) { this.p_clean (10, 9); }
  }
  else if (v_lvl == 11)
  {
    if (this.v_erledigt [99] == 1) { this.p_clean (17, 4); }
    if (this.v_erledigt [100] == 1) { this.p_clean (13, 7); }
    if (this.v_erledigt [101] == 1) { this.p_clean (17, 10); }
    if (this.v_erledigt [102] == 1) { this.p_clean (9, 12); }
    if (this.v_erledigt [103] == 1) { this.p_clean (12, 14); }
    if (this.v_erledigt [104] == 1) { this.p_clean (6, 15); }
    if (this.v_erledigt [105] == 1) { this.p_clean (3, 17); }
  }
  else if (v_lvl == 12)
  {
    if (this.v_erledigt [106] == 1) { this.p_clean (16, 3); }
    if (this.v_erledigt [107] == 1) { this.p_clean (10, 6); }
    if (this.v_erledigt [108] == 1) { this.p_clean (10, 13); }
    if (this.v_erledigt [109] == 1) { this.p_clean (17, 19); }
  }
  else if (v_lvl == 13)
  {
    if (this.v_erledigt [110] == 1) { this.p_clean (2, 19); }
    if (this.v_erledigt [111] == 1) { this.p_clean (4, 15); }
    if (this.v_erledigt [112] == 1) { this.p_clean (8, 17); }
    if (this.v_erledigt [113] == 1) { this.p_clean (11, 17); }
    if (this.v_erledigt [114] == 1) { this.p_clean (15, 14); }
    if (this.v_erledigt [115] == 1) { this.p_clean (18, 19); }
  }
  else if (v_lvl == 14)
  {
    if (this.v_erledigt [116] == 1) { this.p_clean (2, 19); }
    if (this.v_erledigt [117] == 1) { this.p_clean (6, 19); }
    if (this.v_erledigt [118] == 1) { this.p_clean (10, 19); }
    if (this.v_erledigt [119] == 1) { this.p_clean (14, 19); }
    if (this.v_erledigt [120] == 1) { this.p_clean (18, 19); }
    if (this.v_erledigt [121] == 1) { this.p_clean (10, 15); }
    if (this.v_erledigt [122] == 1) { this.p_clean (10, 10); }
  }
  else if (v_lvl == 15)
  {
    if (this.v_erledigt [123] == 1) { this.p_clean (9, 10); }
  }
  else if (v_lvl == 16)
  {
    if (this.v_erledigt [124] == 1) { this.p_clean (6, 14); }
    if (this.v_erledigt [125] == 1) { this.p_clean (6, 8); }
    if (this.v_erledigt [126] == 1) { this.p_clean (9, 10); }
    if (this.v_erledigt [127] == 1) { this.p_clean (13, 10); }
    if (this.v_erledigt [128] == 1) { this.p_clean (17, 10); }
  }
  else if (v_lvl == 17)
  {
    if (this.v_erledigt [129] == 1) { this.p_clean (5, 10); }
    if (this.v_erledigt [130] == 1) { this.p_clean (14, 10); }
    if (this.v_erledigt [131] == 1) { this.p_clean (10, 7); }
    if (this.v_erledigt [132] == 1) { this.p_clean (10, 3); }
    if (this.v_erledigt [133] == 1) { this.p_clean (10, 13); }
    if (this.v_erledigt [134] == 1) { this.p_clean (10, 17); }
  }
  else if (v_lvl == 18)
  {
    if (this.v_erledigt [135] == 1) { this.p_clean (10, 17); }
    if (this.v_erledigt [136] == 1) { this.p_clean (10, 14); }
    if (this.v_erledigt [137] == 1) { this.p_clean (10, 10); }
    if (this.v_erledigt [138] == 1) { this.p_clean (14, 10); }
    if (this.v_erledigt [139] == 1) { this.p_clean (17, 10); }
  }
  else if (v_lvl == 19)
  {
    if (this.v_erledigt [140] == 1) { this.p_clean (2, 10); }
    if (this.v_erledigt [141] == 1) { this.p_clean (5, 10); }
    if (this.v_erledigt [142] == 1) { this.p_clean (9, 10); }
    if (this.v_erledigt [143] == 1) { this.p_clean (12, 10); }
  }
  else if (v_lvl == 20)
  {
    if (this.v_erledigt [144] == 1) { this.p_clean (10, 2); }
    if (this.v_erledigt [145] == 1) { this.p_clean (10, 6); }
    if (this.v_erledigt [146] == 1) { this.p_clean (10, 10); }
    if (this.v_erledigt [147] == 1) { this.p_clean (14, 10); }
    if (this.v_erledigt [148] == 1) { this.p_clean (18, 10); }
  }
  else if (v_lvl == 21)
  {
    if (this.v_erledigt [149] == 1) { this.p_clean (4, 10); }
    if (this.v_erledigt [150] == 1) { this.p_clean (7, 10); }
    if (this.v_erledigt [151] == 1) { this.p_clean (12, 10); }
    if (this.v_erledigt [152] == 1) { this.p_clean (9, 12); }
    if (this.v_erledigt [153] == 1) { this.p_clean (7, 15); }
    if (this.v_erledigt [154] == 1) { this.p_clean (16, 6); }
    if (this.v_erledigt [155] == 1) { this.p_clean (16, 13); }
  }
  else if (v_lvl == 22)
  { 
    if (this.v_erledigt [156] == 1) { this.p_clean (10, 10); }
  }
  else if (v_lvl == 23)
  {
    if (this.v_erledigt [157] == 1) { this.p_clean (3, 16); }
    if (this.v_erledigt [158] == 1) { this.p_clean (7, 5); }
    if (this.v_erledigt [159] == 1) { this.p_clean (10, 10); }
    if (this.v_erledigt [160] == 1) { this.p_clean (15, 10); }
    if (this.v_erledigt [161] == 1) { this.p_clean (16, 7); }
    if (this.v_erledigt [162] == 1) { this.p_clean (16, 12); }
  }
  else if (v_lvl == 24)
  {
    if (this.v_erledigt [163] == 1) { this.p_clean (15, 9); }
    if (this.v_erledigt [164] == 1) { this.p_clean (17, 11); }
    if (this.v_erledigt [165] == 1) { this.p_clean (16, 17); }
    if (this.v_erledigt [166] == 1) { this.p_clean (10, 18); }
    if (this.v_erledigt [167] == 1) { this.p_clean (5, 15); }
    if (this.v_erledigt [168] == 1) { this.p_clean (5, 11); }
  }
  else if (v_lvl == 25)
  {
    if (this.v_erledigt [169] == 1) { this.p_clean (17, 8); }
  }
  else if (v_lvl==26)
  {
    if (this.v_erledigt [170] == 1) { this.p_clean (16, 1); }
    if (this.v_erledigt [171] == 1) { this.p_clean (14, 1); }
    if (this.v_erledigt [172] == 1) { this.p_clean (10, 4); }
    if (this.v_erledigt [173] == 1) { this.p_clean (10, 6); }
    if (this.v_erledigt [174] == 1) { this.p_clean (8, 10); }
    if (this.v_erledigt [175] == 1) { this.p_clean (3, 10); }    
  }
  else if (v_lvl==27)
  {
    if (this.v_erledigt [176] == 1) { this.p_clean (16, 10); }
    if (this.v_erledigt [177] == 1) { this.p_clean (13, 10); }
    if (this.v_erledigt [178] == 1) { this.p_clean (10, 10); }
    if (this.v_erledigt [179] == 1) { this.p_clean (7, 10); }
    if (this.v_erledigt [180] == 1) { this.p_clean (4, 10); }
  }
  else if (v_lvl==28)
  {
    if (this.v_erledigt [181] == 1) { this.p_clean (17, 10); }
    if (this.v_erledigt [182] == 1) { this.p_clean (12, 10); }
    if (this.v_erledigt [183] == 1) { this.p_clean (4, 10); }
    if (this.v_erledigt [184] == 1) { this.p_clean (10, 2); }
    if (this.v_erledigt [185] == 1) { this.p_clean (10, 5); }
    if (this.v_erledigt [186] == 1) { this.p_clean (10, 8); }
    if (this.v_erledigt [187] == 1) { this.p_clean (7, 12); }
    if (this.v_erledigt [188] == 1) { this.p_clean (7, 15); }
    if (this.v_erledigt [189] == 1) { this.p_clean (7, 18); }
  }
  else if (v_lvl==29)
  {
    if (this.v_erledigt [190] == 1) { this.p_clean (10, 18); }
    if (this.v_erledigt [191] == 1) { this.p_clean (10, 15); }
    if (this.v_erledigt [192] == 1) { this.p_clean (10, 12); }
    if (this.v_erledigt [193] == 1) { this.p_clean (5, 5); }
    if (this.v_erledigt [194] == 1) { this.p_clean (12, 10); }
    if (this.v_erledigt [195] == 1) { this.p_clean (15, 10); }
    if (this.v_erledigt [196] == 1) { this.p_clean (18, 10); }
  }
  else if (v_lvl == 30)
  {
    if (this.v_erledigt [197] == 1) { this.p_clean (2, 10); }
    if (this.v_erledigt [198] == 1) { this.p_clean (8, 5); }
    if (this.v_erledigt [199] == 1) { this.p_clean (11, 5); }
    if (this.v_erledigt [200] == 1) { this.p_clean (8, 15); }
    if (this.v_erledigt [201] == 1) { this.p_clean (11, 15); }
    if (this.v_erledigt [202] == 1) { this.p_clean (16, 10); }
  }
  else if (v_lvl == 31)
  {
    if (this.v_erledigt [203] == 1) { this.p_clean (10, 10); }
  }
  else if (v_lvl == 33)
  {
    if (this.v_erledigt [204] == 1) { this.p_clean (10, 2); }
    if (this.v_erledigt [205] == 1) { this.p_clean (10, 5); }
    if (this.v_erledigt [206] == 1) { this.p_clean (8, 7); }
    if (this.v_erledigt [207] == 1) { this.p_clean (6, 9); }
    if (this.v_erledigt [208] == 1) { this.p_clean (6, 11); }
    if (this.v_erledigt [209] == 1) { this.p_clean (6, 14); }
    if (this.v_erledigt [210] == 1) { this.p_clean (8, 16); }
    if (this.v_erledigt [211] == 1) { this.p_clean (10, 18); }
    if (this.v_erledigt [212] == 1) { this.p_clean (13, 14); }
    if (this.v_erledigt [213] == 1) { this.p_clean (13, 11); }
    if (this.v_erledigt [214] == 1) { this.p_clean (13, 9); }
  }
  else if (v_lvl == 34)
  {
    if (this.v_erledigt [215] == 1) { this.p_clean (10, 3); }
    if (this.v_erledigt [216] == 1) { this.p_clean (10, 10); }
    if (this.v_erledigt [217] == 1) { this.p_clean (13, 6); }
    if (this.v_erledigt [218] == 1) { this.p_clean (17, 6); }
  }
  else if (v_lvl == 35)
  {
    if (this.v_erledigt [219] == 1) { this.p_clean (2, 6); }
    if (this.v_erledigt [220] == 1) { this.p_clean (5, 6); }
    if (this.v_erledigt [221] == 1) { this.p_clean (10, 6); }
    if (this.v_erledigt [222] == 1) { this.p_clean (15, 6); }
    if (this.v_erledigt [223] == 1) { this.p_clean (18, 6); }
  }
  else if (v_lvl == 36)
  {
    if (this.v_erledigt [224] == 1) { this.p_clean (3, 6); }
    if (this.v_erledigt [225] == 1) { this.p_clean (7, 6); }
    if (this.v_erledigt [226] == 1) { this.p_clean (10, 3); }
    if (this.v_erledigt [227] == 1) { this.p_clean (10, 9); }
    if (this.v_erledigt [228] == 1) { this.p_clean (10, 13); }
    if (this.v_erledigt [229] == 1) { this.p_clean (10, 17); }
  }
  else if (v_lvl == 37)
  {
    if (this.v_erledigt [230] == 1) { this.p_clean (10, 18); }
    if (this.v_erledigt [231] == 1) { this.p_clean (7, 16); }
    if (this.v_erledigt [232] == 1) { this.p_clean (8, 14); }
    if (this.v_erledigt [233] == 1) { this.p_clean (8, 12); }
    if (this.v_erledigt [234] == 1) { this.p_clean (7, 10); }
    if (this.v_erledigt [235] == 1) { this.p_clean (7, 7); }
    if (this.v_erledigt [236] == 1) { this.p_clean (9, 5); }
    if (this.v_erledigt [237] == 1) { this.p_clean (12, 5); }
    if (this.v_erledigt [238] == 1) { this.p_clean (14, 6); }
    if (this.v_erledigt [239] == 1) { this.p_clean (16, 8); }
    if (this.v_erledigt [240] == 1) { this.p_clean (18, 10); }
  }
  else if (v_lvl == 38)
  {
    if (this.v_erledigt [241] == 1) { this.p_clean (2, 10); }
    if (this.v_erledigt [242] == 1) { this.p_clean (5, 10); }
    if (this.v_erledigt [243] == 1) { this.p_clean (12, 10); }
    if (this.v_erledigt [244] == 1) { this.p_clean (15, 10); }
  }
  else if (v_lvl == 39)
  {
    if (this.v_erledigt [245] == 1) { this.p_clean (10, 2); }
    if (this.v_erledigt [246] == 1) { this.p_clean (5, 3); }
    if (this.v_erledigt [247] == 1) { this.p_clean (10, 5); }
    if (this.v_erledigt [248] == 1) { this.p_clean (10, 10); }
    if (this.v_erledigt [249] == 1) { this.p_clean (10, 15); }
  }
  else if (v_lvl == 40)
  {
    if (this.v_erledigt [250] == 1) { this.p_clean (10, 9); }
  }
  else if (v_lvl == 41)
  {
    if (this.v_erledigt [251] == 1) { this.p_clean (19, 10); }
    if (this.v_erledigt [252] == 1) { this.p_clean (16, 3); }
    if (this.v_erledigt [253] == 1) { this.p_clean (14, 10); }
    if (this.v_erledigt [254] == 1) { this.p_clean (8, 1); }
    if (this.v_erledigt [255] == 1) { this.p_clean (8, 4); }
    if (this.v_erledigt [256] == 1) { this.p_clean (1, 5); }
    if (this.v_erledigt [257] == 1) { this.p_clean (9, 9); }
    if (this.v_erledigt [258] == 1) { this.p_clean (4, 11); }
    if (this.v_erledigt [259] == 1) { this.p_clean (10, 12); }
    if (this.v_erledigt [260] == 1) { this.p_clean (16, 15); }
    if (this.v_erledigt [261] == 1) { this.p_clean (13, 19); }
    if (this.v_erledigt [262] == 1) { this.p_clean (8, 14); }
    if (this.v_erledigt [263] == 1) { this.p_clean (4, 17); }
  }
  else if (v_lvl == 42)
  {
    if (this.v_erledigt [264] == 1) { this.p_clean (1, 3); }
    if (this.v_erledigt [265] == 1) { this.p_clean (3, 6); }
    if (this.v_erledigt [266] == 1) { this.p_clean (6, 8); }
    if (this.v_erledigt [267] == 1) { this.p_clean (9, 6); }
    if (this.v_erledigt [268] == 1) { this.p_clean (14, 3); }
    if (this.v_erledigt [269] == 1) { this.p_clean (19, 6); }
    if (this.v_erledigt [270] == 1) { this.p_clean (14, 6); }
    if (this.v_erledigt [271] == 1) { this.p_clean (13, 9); }
    if (this.v_erledigt [272] == 1) { this.p_clean (8, 12); }
    if (this.v_erledigt [273] == 1) { this.p_clean (5, 14); }
    if (this.v_erledigt [274] == 1) { this.p_clean (8, 16); }
  }
  else if (v_lvl == 43)
  {
    if (this.v_erledigt [275] == 1) { this.p_clean (14, 2); }
    if (this.v_erledigt [276] == 1) { this.p_clean (18, 4); }
    if (this.v_erledigt [277] == 1) { this.p_clean (14, 2); }
  }
}

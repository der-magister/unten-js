//   Unten - ein Rollenspiel im Retrodesign
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

var v_preiseHeiltrank = [ 0, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44, 47, 50, 53, 56,
                      59, 62, 65, 68, 71, 74, 77, 80, 83, 86, 89, 92, 95, 98, 101, 104, 107,
                      110, 113, 116, 119, 122, 125, 128, 131, 134, 137, 140, 143, 146, 149,
                      152, 155, 158, 161, 164, 167, 170, 173, 176, 179, 182, 185, 188, 191,
                      194, 197, 200, 203, 206, 209, 212, 215, 218, 221, 224, 227, 230, 233,
                      236, 239, 242, 245, 248, 251, 254, 257, 260, 263, 266, 269, 272, 275,
                      278, 281, 284, 287, 290, 293, 296, 299, 302
                    ];

var v_preiseManatrank = [ 0, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170,
                      180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310,
                      320, 330, 340, 350, 360, 370, 380, 390, 400, 410, 420, 430, 440, 450,
                      460, 470, 480, 490, 500, 510, 520, 530, 540, 550, 560, 570, 580, 590,
                      600, 610, 620, 630, 640, 650, 660, 670, 680, 690, 700, 710, 720, 730,
                      740, 750, 760, 770, 780, 790, 800, 810, 820, 830, 840, 850, 860, 870,
                      880, 890, 900, 910, 920, 930, 940, 950, 960, 970, 980, 990, 1000, 1010
                    ];

var v_preisePortalrolle = [ 0, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90,
                        95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160,
                        165, 170, 175, 180, 185, 190, 195, 200, 205, 210, 215, 220, 225, 230,
                        235, 240, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290, 295, 300,
                        305, 310, 315, 320, 325, 330, 335, 340, 345, 350, 355, 360, 365, 370,
                        375, 380, 385, 390, 395, 400, 405, 410, 415, 420, 425, 430, 435, 440,
                        445, 450, 455, 460, 465, 470, 475, 480, 485, 490, 495, 500, 505
                      ];

var v_preiseProviant =  [ 0, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
                      27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45,
                      46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64,
                      65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
                      84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101,
                      102, 103, 104, 105, 106, 107
                    ];


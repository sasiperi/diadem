import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  svg: {
    width: 'auto',
    height: 28,
  },
  path: {
    fill: '#7df3e1',
  },
});

const LogoIcon = () => {
  const classes = useStyles();

  return (
    <svg
      className={classes.svg}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 337.46 428.5"
    >
      <g transform="translate(0.000000,481.000000) scale(0.100000,-0.100000)"
      fill="#000000" stroke="none">
      <path d="M1013 3222 c-6 -26 -14 -56 -17 -67 -4 -11 2 -3 11 18 10 21 22 35
      26 31 5 -6 -1 54 -7 63 -1 1 -7 -19 -13 -45z"/>
      <path d="M2701 3212 c-1 -29 -43 -112 -67 -133 -31 -27 -101 -59 -131 -60
      l-28 -1 30 -9 c17 -5 38 -11 48 -12 55 -10 145 -123 147 -187 1 -16 7 -5 15
      28 18 66 39 97 84 128 20 13 31 24 25 24 -23 0 -93 -72 -105 -107 l-12 -37
      -23 47 c-13 25 -35 54 -49 64 -14 10 -35 26 -46 35 -12 10 -26 15 -32 11 -5
      -3 -8 0 -6 6 3 7 9 13 14 14 6 0 15 5 20 9 6 5 23 18 39 30 16 12 41 41 56 65
      l28 43 13 -32 c16 -40 77 -102 103 -106 12 -2 2 10 -25 30 -44 33 -76 83 -90
      142 -5 24 -7 26 -8 8z"/>
      <path d="M1037 3184 c-3 -5 1 -15 9 -22 16 -14 18 -5 5 17 -5 7 -11 9 -14 5z"/>
      <path d="M1070 3125 c24 -32 53 -54 89 -66 l33 -11 -38 -18 c-22 -9 -50 -29
      -63 -43 -13 -15 -28 -24 -32 -21 -5 3 -6 -2 -3 -10 3 -9 2 -16 -4 -16 -5 0
      -13 -15 -16 -32 l-7 -33 -18 38 c-18 38 -78 107 -94 107 -5 0 6 -12 24 -27 35
      -30 78 -113 80 -153 0 -17 4 -10 13 21 26 97 89 161 176 178 28 5 35 9 20 10
      -35 2 -110 37 -145 69 -17 16 -23 19 -15 7z"/>
      <path d="M915 3084 c-22 -13 -35 -24 -30 -24 12 0 75 38 75 45 0 6 2 7 -45
      -21z"/>
      <path d="M1777 3082 c-20 -22 -21 -45 -6 -74 9 -17 7 -25 -13 -45 -20 -19 -29
      -22 -49 -15 -55 21 -107 -35 -76 -82 20 -30 50 -41 76 -27 25 14 51 14 51 1 0
      -5 -8 -10 -18 -10 -10 0 -28 -7 -40 -16 -29 -20 -31 -85 -3 -111 20 -18 20
      -19 -4 -77 -29 -70 -46 -90 -110 -127 -59 -34 -139 -39 -195 -11 -32 16 -34
      20 -32 58 3 35 -1 45 -24 63 -20 16 -35 20 -56 16 -17 -4 -28 -2 -28 4 0 6 11
      11 25 11 29 0 45 41 25 65 -16 20 -57 19 -68 -1 -8 -14 -12 -14 -30 -3 -12 7
      -22 22 -24 33 -4 28 -34 44 -55 30 -22 -13 -29 -50 -14 -68 15 -18 3 -46 -19
      -46 -20 0 -50 -25 -50 -41 0 -5 9 -18 20 -29 16 -16 25 -18 45 -10 33 12 35
      12 35 0 0 -5 -6 -10 -14 -10 -8 0 -21 -7 -30 -15 -13 -13 -19 -13 -36 -3 -16
      10 -24 10 -40 0 -16 -10 -24 -10 -40 0 -11 7 -18 19 -15 26 9 25 -15 53 -42
      50 -34 -4 -52 -32 -37 -56 15 -23 -7 -57 -31 -48 -15 6 -55 -25 -55 -43 0 -21
      34 -42 63 -39 17 2 32 -2 34 -9 3 -7 -2 -13 -11 -13 -41 0 -48 -98 -8 -115 16
      -7 22 -18 22 -41 0 -39 -20 -56 -57 -52 -25 3 -28 7 -29 42 -1 46 -26 69 -66
      63 -19 -2 -28 1 -28 10 0 23 -39 53 -68 53 -35 0 -72 -37 -72 -71 0 -17 -9
      -28 -33 -39 -27 -13 -32 -20 -32 -49 0 -27 6 -38 27 -50 52 -30 75 -80 83
      -177 8 -92 38 -228 55 -249 6 -7 6 -15 -1 -22 -5 -5 -9 -48 -7 -99 l3 -89 50
      -7 c224 -33 466 -43 1030 -43 557 0 823 10 1150 43 l70 7 3 83 c2 47 -2 89 -7
      96 -7 9 -6 19 5 35 21 30 54 192 54 269 0 50 5 73 26 108 14 24 32 44 40 44
      24 0 46 44 35 73 -10 25 -43 43 -60 32 -6 -3 -8 8 -4 28 7 44 -22 80 -65 80
      -36 0 -72 -27 -72 -54 0 -15 -5 -17 -30 -12 -41 8 -70 -19 -70 -64 0 -21 -6
      -36 -16 -40 -24 -9 -63 14 -70 42 -5 20 0 31 25 54 17 16 31 37 31 48 0 25
      -28 63 -46 63 -17 0 -19 20 -1 21 6 1 22 0 35 -1 28 -2 52 16 52 41 0 21 -37
      50 -55 43 -18 -7 -30 15 -30 55 0 62 -66 69 -73 7 -4 -28 -36 -53 -47 -36 -8
      13 -52 13 -60 -1 -5 -7 -12 -6 -23 4 -10 8 -26 17 -37 22 -12 4 -15 9 -8 12 7
      2 21 0 32 -6 26 -15 50 -4 57 25 7 28 -11 54 -37 54 -10 0 -23 9 -29 20 -7 12
      -7 20 -1 20 19 0 23 41 5 61 -29 32 -74 18 -74 -23 0 -26 -35 -41 -51 -22 -16
      19 -59 14 -73 -8 -13 -22 2 -51 30 -56 38 -8 34 -19 -6 -18 -56 1 -85 -31 -76
      -85 6 -36 5 -37 -35 -53 -92 -37 -182 -14 -252 64 -24 26 -49 67 -56 89 -11
      38 -10 44 9 68 11 14 20 36 20 48 0 34 -37 75 -68 75 -19 0 -23 3 -15 11 8 8
      21 8 47 -1 62 -20 103 24 80 85 -10 24 -50 37 -78 24 -20 -9 -27 -7 -50 16
      -20 20 -24 31 -17 38 17 17 13 62 -7 80 -24 22 -65 21 -85 -1z m73 -40 c0 -9
      -7 -26 -15 -36 -15 -20 -15 -20 -30 0 -21 28 -18 52 8 56 29 5 37 1 37 -20z
      m10 -102 c24 -24 25 -38 4 -68 -17 -24 -62 -30 -82 -10 -17 17 -15 64 4 82 21
      22 50 20 74 -4z m-175 -21 c-4 -6 -1 -10 6 -8 45 6 54 -20 14 -41 -20 -11 -27
      -11 -40 0 -20 17 -19 37 3 49 22 13 25 13 17 0z m289 5 c18 -7 22 -49 6 -59
      -13 -8 -70 16 -70 30 0 6 10 15 23 21 12 7 23 12 24 13 1 0 8 -2 17 -5z m-136
      -115 c-2 -6 -8 -10 -13 -10 -5 0 -11 4 -13 10 -2 6 4 11 13 11 9 0 15 -5 13
      -11z m-59 -25 c21 -15 23 -22 19 -79 -11 -131 -102 -258 -214 -298 -91 -32
      -216 -19 -273 29 -40 33 -67 104 -51 134 13 25 48 24 64 -3 9 -14 7 -21 -8
      -32 -16 -12 -17 -17 -6 -30 24 -29 96 -65 142 -71 114 -16 250 82 286 206 23
      80 23 87 -1 86 -26 -1 -36 36 -17 60 16 18 30 18 59 -2z m139 7 c21 -13 11
      -66 -12 -64 -16 1 -17 -4 -12 -40 34 -212 268 -327 412 -203 36 31 37 34 21
      50 -25 25 -5 58 31 54 34 -4 40 -34 18 -93 -28 -72 -94 -105 -210 -105 -58 0
      -82 5 -131 29 -33 16 -74 44 -92 62 -43 46 -91 152 -99 220 -6 49 -4 59 15 78
      22 22 38 26 59 12z m-761 -57 c8 -21 -13 -42 -28 -27 -13 13 -5 43 11 43 6 0
      13 -7 17 -16z m1362 -20 c-15 -18 -28 -18 -36 2 -8 20 17 36 34 22 10 -8 10
      -14 2 -24z m-1229 -34 c0 -13 -7 -20 -18 -20 -24 0 -32 8 -25 26 8 22 43 17
      43 -6z m1108 -3 c2 -11 -3 -17 -17 -17 -23 0 -35 15 -26 31 10 15 39 6 43 -14z
      m-1193 -42 c0 -27 -3 -30 -30 -30 -21 0 -31 5 -33 18 -6 33 6 49 35 45 24 -3
      28 -8 28 -33z m1294 16 c14 -26 -8 -54 -39 -49 -25 3 -36 27 -26 54 8 20 53
      17 65 -5z m-1392 -37 c7 -20 -17 -37 -34 -23 -15 13 -6 39 13 39 8 0 17 -7 21
      -16z m1470 0 c9 -23 -19 -37 -37 -18 -13 13 -13 16 0 24 21 14 30 12 37 -6z
      m-727 -52 c33 -78 109 -152 185 -182 104 -40 272 -27 315 26 14 16 35 19 25 4
      -4 -6 -1 -36 6 -68 9 -46 20 -65 54 -99 40 -41 46 -43 99 -43 32 0 70 7 86 15
      27 14 30 14 30 -1 0 -30 40 -82 76 -99 22 -10 53 -16 80 -13 40 3 44 1 42 -17
      -3 -17 -9 -19 -41 -17 -24 2 -49 -3 -70 -16 l-33 -19 -22 32 c-65 100 -286
      123 -474 49 -65 -25 -168 -90 -168 -105 0 -5 -4 -9 -10 -9 -43 0 72 88 160
      122 44 17 62 30 76 56 10 19 29 41 41 49 37 24 17 33 -70 33 l-82 0 -45 -42
      c-110 -101 -134 -122 -110 -94 14 16 40 43 57 59 20 17 37 46 44 70 6 23 17
      51 24 62 12 20 11 21 -66 20 l-78 0 -22 -47 c-28 -60 -35 -56 -12 6 l17 46
      -36 30 c-43 36 -76 86 -93 143 l-12 41 -17 -52 c-11 -33 -36 -72 -68 -107 -27
      -30 -47 -58 -44 -63 10 -17 66 -176 58 -167 -5 6 -21 42 -37 80 -15 39 -31 74
      -35 78 -4 4 -41 9 -84 10 -71 2 -90 -3 -66 -18 6 -3 15 -26 21 -49 8 -31 26
      -58 65 -97 30 -29 54 -57 54 -63 0 -5 -38 28 -85 73 l-85 81 -79 0 c-44 0 -82
      -4 -85 -9 -3 -4 4 -17 15 -27 11 -10 29 -32 40 -50 13 -22 35 -38 68 -50 55
      -19 153 -82 159 -102 2 -7 -20 5 -49 27 -95 72 -263 118 -392 108 -95 -7 -149
      -30 -196 -83 -35 -40 -39 -42 -55 -26 -11 11 -33 17 -69 17 -29 0 -55 5 -59
      10 -17 23 -6 30 41 27 31 -3 60 2 80 13 34 17 71 68 71 98 0 21 18 22 44 2 25
      -19 109 -19 145 0 59 30 90 86 95 170 1 29 4 30 32 11 41 -29 135 -49 198 -42
      126 13 255 108 293 217 10 27 20 49 23 49 3 0 16 -26 30 -58z m-904 27 c3 -6
      0 -17 -7 -25 -18 -17 -44 -2 -36 20 7 18 33 21 43 5z m1791 -5 c8 -20 -8 -36
      -26 -25 -15 10 -8 41 9 41 6 0 13 -7 17 -16z m-1519 -34 c-2 -6 -8 -6 -18 0
      -13 9 -13 11 0 20 15 10 25 0 18 -20z m1231 4 c-16 -20 -29 -17 -29 5 0 14 5
      18 20 14 16 -4 18 -8 9 -19z m-1389 -43 c0 -19 -23 -35 -34 -24 -14 15 -5 43
      14 43 13 0 20 -7 20 -19z m129 3 c52 -37 68 -147 29 -215 -62 -112 -228 -76
      -228 49 0 37 22 67 44 59 19 -7 21 -38 5 -54 -19 -19 15 -61 55 -68 62 -12 96
      25 96 103 0 57 -10 83 -29 78 -29 -9 -46 12 -42 52 1 17 42 15 70 -4z m1337 2
      c3 -8 0 -24 -6 -36 -9 -16 -18 -20 -35 -16 -21 5 -24 1 -34 -45 -10 -44 -9
      -57 6 -88 34 -69 99 -79 141 -21 21 27 21 32 7 46 -19 19 -19 28 0 44 23 19
      45 -5 45 -51 0 -98 -76 -145 -166 -103 -80 38 -101 197 -34 264 23 23 68 27
      76 6z m100 3 c3 -6 0 -17 -7 -25 -18 -17 -44 -2 -36 20 7 18 33 21 43 5z
      m-1656 -14 c20 -24 3 -55 -30 -55 -20 0 -31 6 -35 20 -8 25 10 50 35 50 10 0
      23 -7 30 -15z m1763 -6 c15 -24 1 -49 -27 -49 -31 0 -48 27 -34 53 11 22 46
      19 61 -4z m-1863 -30 c0 -12 -7 -19 -20 -19 -19 0 -28 28 -14 43 11 11 34 -5
      34 -24z m265 -39 c19 0 26 -27 19 -67 -7 -38 -29 -54 -59 -43 -16 5 -19 15
      -17 47 4 46 -16 73 -53 73 -17 0 -23 4 -19 15 4 8 17 14 32 12 14 -1 27 4 30
      12 3 9 12 3 29 -18 13 -17 30 -31 38 -31z m1477 36 c30 -1 36 -26 5 -26 -39 0
      -61 -32 -53 -79 7 -47 -11 -69 -43 -51 -27 14 -41 41 -41 79 0 25 6 33 34 45
      19 8 37 24 41 36 5 17 9 19 21 9 8 -6 24 -12 36 -13z m203 4 c0 -22 -39 -19
      -43 3 -3 15 1 18 20 15 12 -2 23 -10 23 -18z m-974 -42 c6 -13 28 -41 49 -63
      l38 -40 -30 -83 c-23 -62 -34 -82 -45 -78 -8 3 -27 6 -43 6 -27 0 -30 5 -56
      83 l-26 82 36 39 c20 22 38 48 42 58 7 24 21 23 35 -4z m-876 -27 c-3 -6 -11
      -8 -17 -5 -6 4 -5 9 3 15 16 10 23 4 14 -10z m1729 -2 c-6 -11 -24 -2 -24 11
      0 5 7 7 15 4 8 -4 12 -10 9 -15z m-1759 -39 c22 -25 32 -122 16 -162 -13 -34
      -66 -68 -104 -68 -41 0 -82 27 -106 71 -22 39 -20 63 6 73 23 9 35 -4 30 -33
      -7 -35 6 -56 43 -71 63 -26 129 34 115 107 -4 23 -14 37 -31 43 -13 5 -24 18
      -24 28 0 37 27 43 55 12z m1823 -13 c3 -21 -1 -27 -16 -27 -34 0 -45 -72 -16
      -115 43 -66 152 -43 138 30 -7 37 13 52 42 31 36 -27 -19 -116 -81 -132 -43
      -11 -103 13 -126 49 -37 59 -8 204 39 195 10 -2 18 -14 20 -31z m-2074 -29
      c13 -21 -2 -51 -26 -56 -16 -3 -48 23 -48 38 0 15 32 41 48 38 8 -2 20 -11 26
      -20z m2341 -13 c0 -27 -3 -30 -30 -30 -21 0 -31 5 -33 18 -6 33 6 49 35 45 24
      -3 28 -8 28 -33z m-1347 -42 c33 -66 46 -113 33 -126 -16 -16 -118 87 -130
      131 l-10 32 44 0 c41 0 46 -3 63 -37z m397 5 c-8 -40 -111 -149 -132 -141 -16
      6 -13 22 24 111 l25 62 45 0 45 0 -7 -32z m-1489 -43 c8 -20 -13 -45 -32 -38
      -14 5 -19 34 -7 46 11 12 33 7 39 -8z m49 5 c3 -5 1 -10 -4 -10 -6 0 -11 5
      -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z m2395 0 c0 -5 -4 -10 -10 -10 -5 0 -10
      5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m70 -6 c11 -12 10 -18 -3 -32 -16
      -15 -18 -15 -34 0 -13 14 -14 20 -3 32 7 9 16 16 20 16 4 0 13 -7 20 -16z
      m-1530 -71 c46 -43 77 -80 72 -85 -5 -5 -36 8 -73 30 -35 22 -81 45 -102 53
      -23 8 -45 25 -57 46 l-19 33 49 0 c49 0 52 -2 130 -77z m346 31 c-8 -21 -15
      -34 -15 -28 -1 15 20 76 25 71 2 -2 -2 -21 -10 -43z m344 39 c-1 -21 -51 -63
      -97 -83 -29 -12 -74 -38 -100 -56 -27 -19 -51 -34 -55 -34 -25 0 2 37 74 104
      78 73 83 76 130 76 26 0 48 -3 48 -7z m-1546 -50 c34 -51 59 -120 52 -138 -6
      -17 -38 -20 -65 -6 -20 11 -103 126 -95 133 2 3 26 -14 52 -38 25 -24 48 -42
      49 -40 6 6 -31 85 -38 81 -11 -8 -22 13 -15 30 10 26 35 16 60 -22z m2271 12
      c0 -11 -6 -19 -12 -18 -15 3 -46 -52 -41 -73 2 -10 19 0 56 32 28 25 52 41 52
      34 0 -17 -77 -118 -99 -130 -27 -14 -58 -13 -64 3 -13 33 64 180 91 175 9 -2
      17 -12 17 -23z m-1643 -70 c86 -18 202 -72 240 -112 16 -17 32 -53 42 -92 16
      -63 16 -65 -6 -98 -15 -21 -31 -33 -45 -33 -29 0 -29 18 -2 65 13 22 19 44 15
      59 -9 36 -87 101 -152 126 -116 46 -337 24 -400 -39 -22 -21 -25 -32 -21 -65
      3 -21 11 -44 17 -50 9 -8 10 -4 5 17 -9 33 10 84 36 97 36 20 86 12 108 -16
      12 -15 21 -34 22 -43 0 -9 5 -1 10 17 17 58 104 91 162 61 12 -6 32 -21 45
      -32 36 -33 26 -107 -15 -107 -10 0 -12 9 -8 34 6 27 2 39 -14 55 -44 44 -95
      13 -106 -63 -9 -55 -36 -93 -81 -112 -101 -42 -206 20 -228 135 -12 63 25 145
      77 172 18 10 16 5 -8 -22 -16 -19 -21 -26 -10 -18 41 33 88 50 158 57 l72 7
      -60 6 -60 6 67 1 c37 1 100 -5 140 -13z m568 -7 c109 -75 112 -213 7 -292 -16
      -11 -48 -21 -81 -24 -47 -4 -62 0 -101 22 -122 72 -107 259 25 309 39 15 118
      7 150 -15z m510 13 c-18 -5 -5 -9 48 -13 59 -4 83 -12 125 -38 47 -29 50 -30
      29 -7 -13 14 -37 31 -53 38 -16 6 -27 14 -25 16 3 3 26 -5 51 -17 88 -43 120
      -147 73 -240 -42 -81 -117 -109 -203 -75 -53 20 -70 41 -85 110 -13 58 -34 85
      -66 85 -34 0 -54 -26 -54 -71 0 -43 -5 -47 -32 -22 -23 21 -23 40 1 79 49 80
      210 61 211 -25 l1 -26 15 30 c22 41 42 55 80 55 50 0 84 -33 85 -83 l1 -42 14
      33 c12 27 12 38 2 60 -27 56 -187 101 -311 87 -115 -13 -218 -68 -253 -137
      -14 -28 -14 -32 10 -73 14 -24 26 -48 26 -54 0 -18 -46 -13 -62 7 -35 39 -40
      61 -28 113 22 90 113 157 270 198 71 19 191 29 130 12z m-1320 -11 c-8 -5 -19
      -10 -25 -10 -5 0 -3 5 5 10 8 5 20 10 25 10 6 0 3 -5 -5 -10z m-187 -92 c21
      -19 24 -30 20 -65 l-5 -43 -52 0 c-83 0 -116 -36 -80 -88 24 -34 87 -31 125 7
      27 28 30 28 39 11 20 -38 -71 -80 -142 -66 -48 10 -68 33 -68 81 0 61 18 79
      86 85 45 4 60 9 62 22 2 13 -8 22 -37 34 -23 9 -41 19 -41 23 0 29 62 28 93
      -1z m1917 7 c0 -8 -16 -21 -35 -29 -24 -10 -35 -22 -35 -35 0 -19 6 -21 55
      -21 60 0 79 -16 91 -78 9 -45 -38 -92 -93 -92 -45 0 -123 33 -123 52 1 35 17
      38 45 8 36 -38 93 -42 125 -8 23 26 25 38 7 62 -10 13 -32 21 -78 25 l-64 6
      -3 47 c-3 42 0 48 25 62 37 20 83 21 83 1z m165 -88 c-8 -93 -44 -201 -67
      -205 -23 -4 -24 28 -2 70 10 20 14 44 11 66 -7 38 16 117 41 145 22 25 26 10
      17 -76z m-2289 22 c7 -19 13 -61 14 -94 0 -36 7 -68 15 -79 19 -25 19 -56 0
      -56 -32 0 -66 100 -78 233 -6 58 -5 58 16 44 11 -7 26 -29 33 -48z m506 49
      c-9 -9 -15 -9 -24 0 -9 9 -7 12 12 12 19 0 21 -3 12 -12z m1250 0 c-9 -9 -15
      -9 -24 0 -9 9 -7 12 12 12 19 0 21 -3 12 -12z m-1642 -32 c0 -3 -8 -6 -18 -6
      -10 0 -27 -7 -39 -15 -19 -13 -22 -13 -27 1 -10 25 -7 30 15 31 12 1 26 6 32
      12 9 9 37 -8 37 -23z m2081 14 c14 0 19 -7 19 -25 0 -28 -12 -32 -30 -10 -7 8
      -21 15 -31 15 -11 0 -19 4 -19 8 0 15 13 23 28 17 7 -3 22 -5 33 -5z m-1387
      -41 c25 -22 46 -49 46 -60 0 -24 -5 -24 -30 1 -11 11 -29 20 -40 20 -14 0 -20
      7 -20 21 0 11 -5 29 -10 40 -17 30 3 22 54 -22z m673 -2 c-7 -20 -18 -37 -24
      -37 -7 0 -22 -9 -34 -21 -23 -23 -44 -14 -33 15 6 16 94 89 100 84 1 -2 -3
      -20 -9 -41z m-823 -12 c3 -8 3 -28 0 -43 -7 -33 16 -57 45 -49 14 3 25 -3 36
      -19 11 -16 25 -24 45 -24 17 0 30 -4 30 -10 0 -6 -26 -10 -57 -10 -32 0 -96
      -3 -143 -6 l-85 -7 27 26 c15 14 30 37 33 51 3 14 8 38 11 53 10 49 45 71 58
      38z m974 -2 c6 -10 13 -37 17 -61 4 -23 19 -57 33 -74 l27 -31 -85 6 c-47 4
      -109 7 -137 7 -29 0 -53 5 -53 10 0 6 11 10 24 10 14 0 33 11 44 25 11 13 22
      22 25 18 3 -3 18 -3 32 1 22 6 25 12 25 50 0 23 3 46 7 49 12 13 32 7 41 -10z
      m-1418 -62 c0 -17 -43 -41 -73 -41 -31 0 -48 27 -26 41 19 12 99 11 99 0z
      m590 -6 c15 -17 5 -35 -20 -35 -22 0 -33 23 -17 39 15 15 22 14 37 -4z m678
      -13 c3 -18 -1 -22 -22 -22 -19 0 -26 5 -26 18 0 39 43 43 48 4z m651 15 c8
      -10 7 -17 -1 -25 -20 -20 -63 -14 -88 13 l-23 25 50 0 c30 0 55 -5 62 -13z
      m-835 -62 l16 -25 -47 0 -48 0 30 25 c17 13 31 24 31 25 1 0 9 -11 18 -25z
      m-309 -5 c18 -20 17 -20 -18 -20 -39 0 -45 8 -25 28 16 16 22 15 43 -8z m-679
      -25 c18 -14 17 -14 -13 -15 -17 0 -38 -3 -47 -6 -25 -9 -19 12 7 24 29 14 30
      14 53 -3z m1677 3 c33 -16 36 -33 5 -24 -13 3 -34 6 -47 6 -20 0 -21 2 -11 15
      15 18 19 18 53 3z m-1896 -34 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2
      13 -5z m1678 -4 c197 -10 423 -32 459 -46 12 -5 16 -21 16 -71 0 -64 0 -65
      -24 -59 -261 65 -1628 75 -2106 15 -47 -5 -94 -12 -105 -15 -19 -5 -20 -1 -17
      60 l4 66 36 9 c54 14 216 31 392 40 229 12 1103 13 1345 1z m402 4 c-3 -3 -12
      -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-322 -174 c182 -13 276 -22 273
      -25 -2 -2 -127 -11 -278 -21 -485 -32 -1497 -23 -1715 15 -55 10 191 31 475
      41 261 10 1065 4 1245 -10z"/>
      <path d="M1850 2370 c6 -11 20 -25 33 -31 18 -10 17 -6 -7 20 -34 36 -41 39
      -26 11z"/>
      <path d="M1670 2239 c0 -4 7 -22 15 -40 8 -19 14 -27 14 -19 0 14 -28 72 -29
      59z"/>
      <path d="M1966 2215 c-9 -26 -7 -32 5 -12 6 10 9 21 6 23 -2 3 -7 -2 -11 -11z"/>
      <path d="M1540 2135 c25 -15 51 -31 57 -37 7 -6 13 -8 13 -5 0 11 -65 55 -90
      62 -15 4 -7 -5 20 -20z"/>
      <path d="M2113 2145 c-28 -15 -57 -33 -65 -43 -9 -11 -2 -9 22 6 19 13 50 30
      68 38 17 8 32 16 32 19 0 8 -3 7 -57 -20z"/>
      <path d="M1060 1953 c-37 -47 -2 -113 60 -113 60 0 91 92 43 128 -30 22 -79
      15 -103 -15z m98 -37 c9 -42 -58 -64 -78 -26 -12 22 0 55 22 63 18 6 52 -17
      56 -37z"/>
      <path d="M1860 2105 c27 -9 56 -27 73 -47 15 -18 27 -28 27 -22 0 28 -87 85
      -128 83 -9 0 3 -7 28 -14z"/>
      <path d="M1776 2055 c-42 -22 -55 -44 -56 -96 0 -37 5 -50 28 -71 15 -14 40
      -28 55 -32 57 -13 127 44 127 104 0 37 -30 81 -65 96 -43 18 -53 17 -89 -1z
      m83 -24 c16 -10 6 -31 -15 -31 -8 0 -14 9 -14 20 0 22 7 25 29 11z m-56 -16
      c7 -16 -8 -29 -23 -20 -15 9 -12 35 4 35 8 0 16 -7 19 -15z m-56 -27 c-3 -8
      -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m147 -4 c18 -7 10 -34 -10 -34
      -8 0 -14 9 -14 20 0 22 1 23 24 14z m-54 -29 c0 -8 -4 -16 -9 -19 -12 -8 -34
      21 -27 33 9 14 36 2 36 -14z m-65 -5 c0 -22 -29 -18 -33 3 -3 14 1 18 15 15
      10 -2 18 -10 18 -18z m105 -35 c10 -12 9 -16 -5 -21 -19 -8 -40 9 -31 25 10
      15 21 14 36 -4z m-67 -9 c7 -16 -1 -26 -20 -26 -7 0 -13 9 -13 20 0 23 25 27
      33 6z"/>
      <path d="M2487 1962 c-40 -45 -6 -122 53 -122 59 0 90 67 54 118 -20 28 -83
      31 -107 4z m81 -24 c30 -30 0 -75 -43 -64 -19 5 -25 13 -25 35 0 15 3 31 7 34
      11 11 48 8 61 -5z"/>
      <path d="M825 3051 l-30 -7 35 -6 c19 -3 44 -8 55 -12 15 -6 15 -4 -3 6 -12 8
      -19 17 -16 21 8 8 2 8 -41 -2z"/>
      <path d="M1079 3003 c-13 -16 -12 -17 4 -4 9 7 17 15 17 17 0 8 -8 3 -21 -13z"/>
      <path d="M2860 3005 c-32 -18 -26 -18 30 -1 32 11 38 15 20 15 -14 0 -36 -6
      -50 -14z"/>
      <path d="M582 2755 c-12 -20 -37 -42 -54 -50 -18 -8 -26 -14 -17 -15 24 0 69
      -39 81 -69 6 -15 12 -21 15 -14 6 17 -33 70 -56 78 -16 5 -15 9 15 39 l34 34
      34 -34 c30 -30 32 -34 15 -39 -11 -4 -24 -16 -31 -28 -10 -19 -7 -18 21 6 18
      15 42 27 54 28 18 1 17 2 -6 9 -38 11 -58 29 -72 63 l-12 29 -21 -37z"/>
      <path d="M2980 2697 c-8 -17 -30 -39 -48 -49 -26 -12 -29 -17 -16 -20 17 -3
      65 37 78 65 5 9 7 9 12 0 8 -17 44 -57 44 -49 0 4 -9 19 -20 33 -11 14 -20 32
      -20 39 0 24 -14 15 -30 -19z"/>
      <path d="M3045 2624 c-18 -21 -56 -27 -72 -11 -19 19 -23 4 -5 -16 12 -13 22
      -29 22 -35 0 -7 5 -12 10 -12 6 0 10 6 10 13 0 18 38 53 69 65 22 8 23 9 5 14
      -12 3 -26 -4 -39 -18z m-35 -34 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5
      10 10 10 6 0 10 -4 10 -10z"/>
      </g>
    </svg>
  );
};

export default LogoIcon;
import type { Player } from '../../entities/player/model/types.ts';

const playerMock: Player = {
  id: 209_331,
  rank: 1,
  overallRating: 91,
  firstName: 'Mohamed',
  lastName: 'Salah',
  commonName: undefined,
  birthdate: '6/15/1992 12:00:00 AM',
  height: 175,
  skillMoves: 4,
  weakFootAbility: 3,
  preferredFoot: 2,
  leagueName: 'Premier League',
  weight: 72,
  avatarUrl:
    'https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p209331.png?padding=0.7',
  shieldUrl:
    'https://ratings-images-prod.pulse.ea.com/FC25/full/player-shields/es/209331.png?width=265',
  alternatePositions: [
    {
      id: '23',
      label: 'Exterior derecho',
      shortLabel: 'ED',
    },
  ],
  playerAbilities: [
    {
      id: 'trait1_64',
      label: 'Tiro raso potente ',
      description:
        'Mejora la cap. de realizar tiros rasos pot. con mayor prec., vel. de desplazam. del balón y una ejec. de tiro más rápida.',
      imageUrl:
        'https://drop-assets.ea.com/images/1NfyWsEpQ7s9bhWWt92lbn/5b5dbeb0e55c2e9241cdc26c70ee2d2c/Low_Driven_Shot.png',
      type: {
        id: 'playStyle',
        label: 'Play Style',
      },
    },
    {
      id: 'trait1_128',
      label: 'Revolución',
      description: 'Los tiros con clase y tiros con el exterior son más precisos. ',
      imageUrl:
        'https://drop-assets.ea.com/images/2v8I0GQrtREaEJzJcyStKe/e46d719e4e5ed88ac5a1f671c7448f4a/Gamechanger.png',
      type: {
        id: 'playStyle',
        label: 'Play Style',
      },
    },
    {
      id: 'trait1_4096',
      label: 'Pase con rosca',
      description: 'Centros precisos, más rápidos y con más efecto',
      imageUrl:
        'https://drop-assets.ea.com/images/FfTP29PWrRWZjEaiCCVoa/a1b345e4ae7023ed78b1efd68d28f392/Whipped_Pass.png',
      type: {
        id: 'playStyle',
        label: 'Play Style',
      },
    },
    {
      id: 'trait1_8192',
      label: 'Inventiva',
      description: 'Los pases con clase y pases con el exterior son más precisos. ',
      imageUrl:
        'https://drop-assets.ea.com/images/4fpo31RdL5T0vrzNqcSc4x/f82209bfd51270dcc447d4313b3e61f1/Inventive.png',
      type: {
        id: 'playStyle',
        label: 'Play Style',
      },
    },
    {
      id: 'trait1_1048576',
      label: 'Regate hábil',
      description: 'Esprint controlado más rápido, giros abiertos precisos al regatear',
      imageUrl:
        'https://drop-assets.ea.com/images/5Esx7NK4YBU44O4bo07rvb/69ca9417da7fd07905f6c6956ad93f6d/Technical.png',
      type: {
        id: 'playStyle',
        label: 'Play Style',
      },
    },
    {
      id: 'trait1_4194304',
      label: 'Primer toque',
      description: 'Menos errores al recibir el balón, transición de regate más rápida',
      imageUrl:
        'https://drop-assets.ea.com/images/3f727XsoDVLbT49oMk0HBu/2787568be8ccb2d5daa2d18fabacad97/First_Touch.png',
      type: {
        id: 'playStyle',
        label: 'Play Style',
      },
    },
    {
      id: 'icontrait1_1',
      label: 'Con calidad+',
      description: 'Tiros de calidad más rápidos, con efecto y precisión máximos',
      imageUrl:
        'https://drop-assets.ea.com/images/4KwpQLGCfHPMd9oq5Xl42z/2101ac72c690fd36205fb9c6dbac6bd1/Finesse_Shot_.png',
      type: {
        id: 'playStylePlus',
        label: 'Play Style Plus',
      },
    },
  ],
  gender: {
    id: 0,
    label: 'Fútbol masculino',
  },
  nationality: {
    id: 111,
    label: 'Egipto',
    imageUrl:
      'https://drop-assets.ea.com/images/3oaPJgnayo3Vq637niTdZs/2f31f32693e575ac1ae46a0651b1a8f7/f_111.png',
  },
  team: {
    id: 9,
    label: 'Liverpool',
    imageUrl:
      'https://drop-assets.ea.com/images/3mmzooNXBDCKuCy6kWcGQo/2e332a30fe2a7225a88fcb1898f48bbf/l9.png',
    isPopular: false,
  },
  position: {
    id: '12',
    shortLabel: 'MD',
    label: 'Medio derecho',
    positionType: {
      id: 'midfielder',
      name: 'Centrocampista',
    },
  },
  stats: {
    acceleration: {
      value: 88,
      diff: 0,
    },
    agility: {
      value: 86,
      diff: 0,
    },
    jumping: {
      value: 79,
      diff: 0,
    },
    stamina: {
      value: 88,
      diff: 0,
    },
    strength: {
      value: 75,
      diff: 0,
    },
    aggression: {
      value: 63,
      diff: 0,
    },
    balance: {
      value: 91,
      diff: 0,
    },
    ballControl: {
      value: 90,
      diff: 0,
    },
    composure: {
      value: 93,
      diff: 0,
    },
    crossing: {
      value: 86,
      diff: 0,
    },
    curve: {
      value: 88,
      diff: 0,
    },
    def: {
      value: 45,
      diff: 0,
    },
    defensiveAwareness: {
      value: 38,
      diff: 0,
    },
    dri: {
      value: 90,
      diff: 0,
    },
    dribbling: {
      value: 90,
      diff: 0,
    },
    finishing: {
      value: 94,
      diff: 0,
    },
    freeKickAccuracy: {
      value: 69,
      diff: 0,
    },
    gkDiving: {
      value: 14,
      diff: 0,
    },
    gkHandling: {
      value: 14,
      diff: 0,
    },
    gkKicking: {
      value: 9,
      diff: 0,
    },
    gkPositioning: {
      value: 11,
      diff: 0,
    },
    gkReflexes: {
      value: 14,
      diff: 0,
    },
    headingAccuracy: {
      value: 59,
      diff: 0,
    },
    interceptions: {
      value: 55,
      diff: 0,
    },
    longPassing: {
      value: 81,
      diff: 0,
    },
    longShots: {
      value: 78,
      diff: 0,
    },
    pac: {
      value: 89,
      diff: 0,
    },
    pas: {
      value: 86,
      diff: 0,
    },
    penalties: {
      value: 88,
      diff: 0,
    },
    phy: {
      value: 76,
      diff: 0,
    },
    positioning: {
      value: 93,
      diff: 0,
    },
    reactions: {
      value: 94,
      diff: 0,
    },
    sho: {
      value: 88,
      diff: 0,
    },
    shortPassing: {
      value: 88,
      diff: 0,
    },
    shotPower: {
      value: 83,
      diff: 0,
    },
    slidingTackle: {
      value: 41,
      diff: 0,
    },
    sprintSpeed: {
      value: 89,
      diff: 0,
    },
    standingTackle: {
      value: 43,
      diff: 0,
    },
    vision: {
      value: 89,
      diff: 0,
    },
    volleys: {
      value: 83,
      diff: 0,
    },
  },
};

export { playerMock };

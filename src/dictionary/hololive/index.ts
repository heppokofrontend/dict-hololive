import { hololiveEn } from './en';
import { hololiveId } from './id';
import { hololiveJp } from './jp';

export const hololive: LiverData[] = [
  {
    name: ['', ''],
    alias: [
      ['ほろらいぶ', 'Hololive'],
      ['ほろ', 'Hololive'],
      ['ほぉ', 'Hololive'],
      ['holo', 'Hololive'],
      ['Holo', 'Hololive'],
      ['ほぉぃヴぇ', 'Hololive'],
    ],
    marks: ['▶'],
    tags: [],
    fans: ['ホロリス'],
    twitter: [
      ['@hololivetv', 'ホロライブプロダクション公式'],
      ['@hololive_En', 'ホロライブプロダクションEN公式'],
      ['@hololive_Id', 'ホロライブID公式'],
    ],
    flags: {
      isGroupName: true,
    },
  },
  {
    name: ['', ''],
    alias: [
      ['ほろｊｐ', 'HololiveJP'],
      ['ほろらいぶｊｐ', 'HololiveJP'],
    ],
    marks: ['▶'],
    tags: [],
    fans: [],
    twitter: [['@hololivetv', 'ホロライブプロダクション公式']],
    flags: {
      isGroupName: true,
    },
  },
  {
    name: ['', ''],
    alias: [
      ['ほろらいぶen', 'hololive English'],
      ['ほろen', 'HololiveEN'],
      ['ほろらいぶえｎ', 'hololive English'],
      ['ほろえｎ', 'HololiveEN'],
      ['ほろらいぶえん', 'hololive English'],
      ['ほろえん', 'HololiveEN'],
      ['ほぉぃヴぇen', 'hololive English'],
      ['ほぉen', 'HololiveEN'],
      ['ほぉぃヴぇえｎ', 'hololive English'],
      ['ほぉえｎ', 'HololiveEN'],
      ['ほぉぃヴぇえん', 'hololive English'],
      ['ほぉえん', 'HololiveEN'],
      ['hololiveen', 'hololive English'],
      ['holoen', 'hololive English'],
      ['holoen', 'HololiveEN'],
      ['Holoen', 'HololiveEN'],
    ],
    marks: ['▶'],
    tags: [],
    fans: [],
    twitter: ['@hololive_En'],
    flags: {
      isGroupName: true,
    },
  },
  {
    name: ['', ''],
    alias: [
      ['ほろらいぶid', 'hololive Indonesia'],
      ['ほろid', 'HololiveID'],
      ['ほろらいぶいｄ', 'hololive Indonesia'],
      ['ほろいｄ', 'HololiveID'],
      ['ほぉぃヴぇid', 'hololive Indonesia'],
      ['ほぉid', 'HololiveID'],
      ['ほぉぃヴぇいｄ', 'hololive Indonesia'],
      ['ほぉいｄ', 'HololiveID'],
      ['hololiveid', 'hololive Indonesia'],
      ['holoid', 'hololive Indonesia'],
      ['holoid', 'HololiveID'],
      ['Holoid', 'HololiveID'],
    ],
    marks: ['▶'],
    tags: [],
    fans: [],
    twitter: ['@hololive_Id'],
    flags: {
      isGroupName: true,
    },
  },
  {
    name: ['ゆうじんえー', '友人A'],
    alias: [['えーちゃん', 'Aちゃん']],
    marks: ['👓'],
    tags: [
      ['#絵ーちゃん', 'ファンアート'],
      ['#よなよなえーぼいす', 'ボイスツイートリクエスト'],
    ],
    fans: [],
    twitter: ['@achan_UGA'],
  },
  {
    name: ['はるさき のどか', '春先 のどか'],
    alias: [],
    marks: ['📝'],
    tags: [['#のどかあーと', 'ファンアート'], '#春先のどかは研修中'],
    fans: [],
    twitter: ['@harusakinodoka'],
  },

  ...hololiveJp,
  ...hololiveId,
  ...hololiveEn,
];

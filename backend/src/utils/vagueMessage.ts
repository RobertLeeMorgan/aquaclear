export default function isVagueMessage(msg: string) {
  const trimmed = msg.trim().toLowerCase();

  const vaguePatterns: RegExp[] = [
    /^sure[.!?]*$/i,
    /^you sure[.!?]*$/i,
    /^go ahead[.!?]*$/i,
    /^continue[.!?]*$/i,
    /^ok[.!?]*$/i,
    /^okay[.!?]*$/i,
    /^please[.!?]*$/i,
    /^yes[.!?]*$/i,
    /^no[.!?]*$/i,
    /^nah[.!?]*$/i,
    /^y[.!?]*$/i,
    /^n[.!?]*$/i,
    /^yeah[.!?]*$/i,
    /^thanks[.!?]*$/i,
    /^thank you[.!?]*$/i,
    /^got it[.!?]*$/i,
    /^more[.!?]*$/i,
    /^next[.!?]*$/i,
    /^how[.!?]*$/i,
    /^when[.!?]*$/i,
    /^why[.!?]*$/i,
    /^where[.!?]*$/i,
    /^because[.!?]*$/i,
    /^who[.!?]*$/i,
    /^tell me more[.!?]*$/i,
    /^what next[.!?]*$/i,
    /^please explain[.!?]*$/i,
    /^what do i do[.!?]*$/i,
    /^can you expand[.!?]*$/i,
    /^try[.!?]*$/i,
    /^nope[.!?]*$/i,
    /^what[.!?]*$/i,
    /^really[.!?]*$/i,
  ];

  return vaguePatterns.some((pattern) => pattern.test(trimmed));
}
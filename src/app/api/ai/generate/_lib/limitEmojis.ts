// Strictly limit the number of emojis in a string
export function limitEmojis(text: string, maxEmojis: number): string {
  const emojiRegex = /([\u231A-\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD-\u25FE\u2614-\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA-\u26AB\u26BD-\u26BE\u26C4-\u26C5\u26CE\u26D4\u26EA\u26F2-\u26F3\u26F5\u26FA\u26FD\u2705\u270A-\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B-\u2B1C\u2B50\u2B55\u1F004\u1F0CF\u1F18E\u1F191-\u1F19A\u1F1E6-\u1F1FF\u1F201-\u1F202\u1F21A\u1F22F\u1F232-\u1F23A\u1F250-\u1F251\u1F300-\u1F321\u1F324-\u1F393\u1F396-\u1F397\u1F399-\u1F39B\u1F39E-\u1F3F0\u1F3F3-\u1F3F5\u1F3F7-\u1F4FD\u1F4FF-\u1F53D\u1F549-\u1F54E\u1F550-\u1F567\u1F56F-\u1F570\u1F573-\u1F57A\u1F587\u1F58A-\u1F58D\u1F590\u1F595-\u1F596\u1F5A4-\u1F5A5\u1F5A8\u1F5B1-\u1F5B2\u1F5BC\u1F5C2-\u1F5C4\u1F5D1-\u1F5D3\u1F5DC-\u1F5DE\u1F5E1\u1F5E3\u1F5E8\u1F5EF\u1F5F3\u1F5FA-\u1F64F\u1F680-\u1F6C5\u1F6CB-\u1F6D2\u1F6E0-\u1F6E5\u1F6E9\u1F6EB-\u1F6EC\u1F6F0\u1F6F3-\u1F6F8\u1F910-\u1F93A\u1F93C-\u1F93E\u1F940-\u1F945\u1F947-\u1F94C\u1F950-\u1F96B\u1F980-\u1F997\u1F9C0\u1F9D0-\u1F9E6])/g;
  var emojis = [];
  var match;
  var regex = new RegExp(emojiRegex.source, 'g');
  while ((match = regex.exec(text)) !== null) {
    emojis.push(match[0]);
  }
  if (emojis.length > maxEmojis) {
    var count = 0;
    return text.replace(emojiRegex, function(m) {
      count++;
      return count <= maxEmojis ? m : '';
    });
  }
  return text;
}

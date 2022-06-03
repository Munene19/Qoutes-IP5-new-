export default function(number: number, index: number): [string, string] {
  return [
    ['ამ წამს', 'ახლა'],
    ['%s წამის წინ', '%s წამში'],
    ['1 წუთის წინ', '1 წუთში'],
    ['%s წუთის წინ', '%s წუთში'],
    ['1 საათის წინ', '1 საათში'],
    ['%s საათის წინ', '%s საათში'],
    ['1 დღის წინ', '1 დღეში'],
    ['%s დღის წინ', '%s დღეში'],
    ['1 კვირის წინ', '1 კვირაში'],
    ['%s კვირის წინ', '%s კვირაში'],
    ['1 თვის წინ', '1 თვეში'],
    ['%s თვის წინ', '%s თვეში'],
    ['1 წლის წინ', '1 წელიწადში'],
    ['%s წლის წინ', '%s წელიწადში'],
  ][index] as [string, string];
}
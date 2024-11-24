import { test, expect } from '@playwright/test';

test('탑네비게이션에서 다이얼로그 열리고 닫히는지 확인', async ({ page }) => {
  // 페이지를 로드합니다.
  await page.goto('http://localhost:3000');

  // 다이얼로그 열기 버튼을 찾습니다.
  const openButton = page.getByTestId('address-dialog-open-button');
  const closeButton = page.getByTestId('address-dialog-close-button');
  const dialog = page.getByTestId('address-dialog');

  // 다이얼로그가 처음에는 닫혀있는지 확인합니다.
  await expect(dialog).toHaveClass(/translate-y-full/);

  // 버튼을 클릭하여 다이얼로그를 엽니다.
  await openButton.click();

  // 다이얼로그가 열렸는지 확인합니다.
  await expect(dialog).toHaveClass(/translate-y-0/);

  // 다시 버튼을 클릭하여 다이얼로그를 닫습니다.
  await closeButton.click();

  // 다이얼로그가 닫혔는지 확인합니다.
  await expect(dialog).toHaveClass(/translate-y-full/);
});

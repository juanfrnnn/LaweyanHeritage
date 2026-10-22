import { toPng } from 'html-to-image';

/**
 * Generate and download a commitment card as PNG.
 * @param {HTMLElement} cardElement - The DOM element to capture
 * @param {string} name - Committer's name for the filename
 * @returns {Promise<string|null>} - Data URL of the generated image, or null on failure
 */
export async function generatePledgeCard(cardElement, name = 'wisatawan') {
  if (!cardElement) return null;

  try {
    const dataUrl = await toPng(cardElement, {
      quality: 0.95,
      pixelRatio: 2,
      backgroundColor: '#FFFFFF',
      style: {
        margin: '0',
        borderRadius: '0',
      },
    });

    return dataUrl;
  } catch (error) {
    console.error('Failed to generate pledge card:', error);
    return null;
  }
}

/**
 * Download a data URL as a file
 * @param {string} dataUrl - The data URL to download
 * @param {string} filename - Desired filename
 */
export function downloadImage(dataUrl, filename) {
  const link = document.createElement('a');
  link.download = filename;
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Share content using Web Share API with fallback
 * @param {Object} shareData - Data to share
 * @returns {Promise<boolean>} - Whether sharing was successful
 */
export async function shareContent(shareData) {
  if (navigator.share) {
    try {
      await navigator.share(shareData);
      return true;
    } catch (err) {
      if (err.name !== 'AbortError') {
        console.error('Share failed:', err);
      }
      return false;
    }
  }
  return false;
}

/**
 * Copy text to clipboard
 * @param {string} text - Text to copy
 * @returns {Promise<boolean>}
 */
export async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback for older browsers
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      document.body.removeChild(textarea);
      return true;
    } catch {
      document.body.removeChild(textarea);
      return false;
    }
  }
}

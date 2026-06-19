/**
 * Site Helper - Generates page hint cards, keyword badges, and access instructions
 * Dependencies: None (Vanilla JS)
 * Version: 1.0.0
 */

(function() {
  'use strict';

  // Configuration data
  const CONFIG = {
    siteUrl: 'https://zhmain-hth.com.cn',
    keyword: '华体会',
    badgeColors: ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6'],
    cardTypes: [
      {
        title: '访问提示',
        icon: 'ℹ️',
        content: '如果您首次访问此站点，请确保网络连接稳定，并允许浏览器加载必要脚本。'
      },
      {
        title: '功能预览',
        icon: '⚡',
        content: '本站提供快速浏览、即时搜索及个性化推荐，所有操作无需额外插件。'
      },
      {
        title: '安全指南',
        icon: '🔒',
        content: '请确认您访问的是官方域名 ' + CONFIG.siteUrl + '，谨防仿冒页面。'
      }
    ],
    badgeLabels: ['华体会', '体育', '电竞', '真人', '彩票', '棋牌']
  };

  // Helper: Create a DOM element with attributes and text
  function createElement(tag, attrs, text) {
    var el = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function(key) {
        el.setAttribute(key, attrs[key]);
      });
    }
    if (text !== undefined) {
      el.textContent = text;
    }
    return el;
  }

  // Helper: Generate a random badge color
  function randomColor() {
    return CONFIG.badgeColors[Math.floor(Math.random() * CONFIG.badgeColors.length)];
  }

  // Build card container
  function buildCards() {
    var container = createElement('div', { class: 'sh-card-container', style: 'display:flex;flex-wrap:wrap;gap:12px;margin:20px 0;' });
    CONFIG.cardTypes.forEach(function(card) {
      var cardEl = createElement('div', {
        class: 'sh-card',
        style: 'border:1px solid #ddd;border-radius:8px;padding:16px;background:#f9f9f9;flex:1;min-width:200px;box-shadow:0 2px 4px rgba(0,0,0,0.05);'
      });
      var header = createElement('div', { style: 'font-weight:bold;font-size:1.1em;margin-bottom:8px;' });
      header.textContent = card.icon + ' ' + card.title;
      var body = createElement('p', { style: 'margin:0;color:#555;line-height:1.5;' }, card.content);
      cardEl.appendChild(header);
      cardEl.appendChild(body);
      container.appendChild(cardEl);
    });
    return container;
  }

  // Build keyword badges
  function buildBadges() {
    var container = createElement('div', { class: 'sh-badge-container', style: 'display:flex;flex-wrap:wrap;gap:8px;margin:16px 0;' });
    CONFIG.badgeLabels.forEach(function(label) {
      var badge = createElement('span', {
        class: 'sh-badge',
        style: 'display:inline-block;padding:4px 12px;border-radius:16px;color:#fff;font-size:0.85em;background:' + randomColor() + ';'
      }, label);
      container.appendChild(badge);
    });
    return container;
  }

  // Build access instruction section
  function buildAccessInfo() {
    var section = createElement('div', { class: 'sh-access-info', style: 'margin:16px 0;padding:12px;background:#eef6ff;border-left:4px solid #3498db;border-radius:4px;' });
    var title = createElement('h3', { style: 'margin:0 0 6px;font-size:1em;' }, '📋 访问说明');
    var list = createElement('ul', { style: 'margin:0;padding-left:20px;color:#333;' });
    var items = [
      '主站域名：' + CONFIG.siteUrl,
      '核心关键词：' + CONFIG.keyword,
      '推荐使用最新版 Chrome / Firefox / Edge 浏览器',
      '如遇加载缓慢，请尝试刷新页面或切换网络',
      '本站不存储任何用户隐私信息'
    ];
    items.forEach(function(text) {
      var li = createElement('li', { style: 'margin:4px 0;' }, text);
      list.appendChild(li);
    });
    section.appendChild(title);
    section.appendChild(list);
    return section;
  }

  // Initialize all components
  function init() {
    var target = document.body || document.documentElement;
    if (!target) return;

    // Insert cards
    var cards = buildCards();
    target.insertBefore(cards, target.firstChild);

    // Insert badges after cards
    var badges = buildBadges();
    if (cards.nextSibling) {
      target.insertBefore(badges, cards.nextSibling);
    } else {
      target.appendChild(badges);
    }

    // Insert access info at the end
    var info = buildAccessInfo();
    target.appendChild(info);
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

import React, { useState } from "react";


function AISidebar({ title = "", suggestions = [], onAddTask }) {
  const [isOpen, setIsOpen] = useState(true); // 控制侧边栏展开/收起
  const [activeTab, setActiveTab] = useState("suggestions"); // 多标签切换

  // 模拟 AI 生成建议
  const generateSuggestions = () => {
    return [
      "优先处理高风险任务",
      "拆分复杂任务为子任务",
      "为任务添加截止时间",
      "标记重要任务为星标",
    ];
  };

  return (
    <div className={`ai-sidebar ${isOpen ? "open" : "collapsed"}`}>
      {/* 侧边栏标题栏 */}
      <div className="sidebar-header">
        <h3>{title}</h3>
        <button 
          className="toggle-btn" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "收起侧边栏" : "展开侧边栏"}
        >
          {isOpen ? "«" : "»"}
        </button>
      </div>

      {/* 内容区域 */}
      {isOpen && (
        <div className="sidebar-content">
          {/* 标签页切换 */}
          <div className="tab-nav">
            <button 
              className={activeTab === "suggestions" ? "active" : ""}
              onClick={() => setActiveTab("suggestions")}
            >
              建议
            </button>
            <button 
              className={activeTab === "settings" ? "active" : ""}
              onClick={() => setActiveTab("settings")}
            >
              设置
            </button>
          </div>

          {/* 建议列表 */}
          {activeTab === "suggestions" && (
            <div className="suggestions-list">
              {suggestions.length > 0 ? (
                suggestions.map((suggestion, index) => (
                  <div 
                    key={index} 
                    className="suggestion-item"
                    onClick={() => onAddTask?.(suggestion)}
                  >
                    {suggestion}
                  </div>
                ))
              ) : (
                <p className="no-suggestions">暂无建议</p>
              )}
            </div>
          )}

          {/* 设置面板（示例） */}
          {activeTab === "settings" && (
            <div className="settings-panel">
              <label>
                <input type="checkbox" defaultChecked />
                启用智能排序
              </label>
              <label>
                <input type="checkbox" />
                通知提醒
              </label>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default AISidebar;
                </button>
              ))}
            </div>
            {/* Active Tab Panel */}
            <div className="flex-1 p-5 sm:p-7 overflow-y-auto space-y-6">
              {activeTab === 'profile' && (
                <ProfileTab draftData={draftData} onChange={setDraftData} onNotify={onNotify} />
              )}
              {activeTab === 'experience' && (
                <ExperienceTab draftData={draftData} onChange={setDraftData} onNotify={onNotify} />
              )}
              {activeTab === 'organization' && (
                <OrganizationTab draftData={draftData} onChange={setDraftData} onNotify={onNotify} />
              )}
              {activeTab === 'projects' && (
                <ProjectsTab draftData={draftData} onChange={setDraftData} onNotify={onNotify} />
              )}
              {activeTab === 'vertical' && (
                <VerticalTab draftData={draftData} onChange={setDraftData} onNotify={onNotify} />
              )}
              {activeTab === 'contact' && (
                <ContactTab draftData={draftData} onChange={setDraftData} />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

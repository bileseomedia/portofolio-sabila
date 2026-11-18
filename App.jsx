        contact={portfolioData.contact}
        onOpenAdmin={() => handleOpenAdminWithTab('profile')}
      />
      {/* Circular Radial Orbit Navigation */}
      <RadialNav
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />
      {/* Project Detail Modal */}
      {activeProjectModal && (
        <ProjectModal
          project={activeProjectModal}
          onClose={() => setActiveProjectModal(null)}
        />
      )}
      {/* Fullscreen Media Lightbox */}
      {lightboxMedia && (
        <Lightbox
          media={lightboxMedia}
          onClose={() => setLightboxMedia(null)}
        />
      )}
      {/* Admin Dashboard Studio Modal */}
      <AdminModal
        isOpen={adminOpen}
        onClose={() => setAdminOpen(false)}
        portfolioData={portfolioData}
        initialTab={adminInitialTab}
        onUpdatePortfolio={(updated) => setPortfolioData(updated)}
        onNotify={notify}
      />
    </div>
  );
}

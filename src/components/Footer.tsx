const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container text-center">
        <p className="text-sm text-muted-foreground">
          © {currentYear} All Rights Reserved By <span className="text-primary">Bedimcode</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

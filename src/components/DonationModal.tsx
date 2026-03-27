import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, X, TrendingUp, Users } from "lucide-react";

const STORAGE_KEY = "netforall_donations";

interface Donation {
  amount: number;
  timestamp: number;
}

function getStoredData(): { total: number; count: number; donations: Donation[] } {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { total: 0, count: 0, donations: [] };
}

function storeData(data: { total: number; count: number; donations: Donation[] }) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

const presetAmounts = [10, 25, 50, 100, 250];

const DonationModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const [data, setData] = useState(getStoredData);
  const [customAmount, setCustomAmount] = useState("");
  const [selectedPreset, setSelectedPreset] = useState<number | null>(50);
  const [showSuccess, setShowSuccess] = useState(false);
  const [lastDonation, setLastDonation] = useState(0);

  useEffect(() => {
    setData(getStoredData());
  }, [open]);

  const currentAmount = selectedPreset ?? (Number(customAmount) || 0);

  const handleDonate = () => {
    if (currentAmount <= 0) return;
    const newDonation: Donation = { amount: currentAmount, timestamp: Date.now() };
    const updated = {
      total: data.total + currentAmount,
      count: data.count + 1,
      donations: [...data.donations, newDonation].slice(-50),
    };
    storeData(updated);
    setData(updated);
    setLastDonation(currentAmount);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setSelectedPreset(50);
      setCustomAmount("");
    }, 3000);
  };

  const goal = 50000;
  const progress = Math.min((data.total / goal) * 100, 100);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          <div className="absolute inset-0 bg-foreground/50 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-card rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary p-6 text-center relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <Heart className="w-10 h-10 text-accent mx-auto mb-3" />
              <h3 className="font-display text-2xl font-bold text-primary-foreground">
                Soutenez Net for All
              </h3>
              <p className="text-primary-foreground/70 text-sm mt-1">
                Chaque don compte pour connecter le monde.
              </p>
            </div>

            {/* Progress bar */}
            <div className="px-6 pt-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="font-semibold text-foreground flex items-center gap-1">
                  <TrendingUp className="w-4 h-4 text-accent" />
                  {data.total.toLocaleString("fr-FR")} €
                </span>
                <span className="text-muted-foreground">
                  Objectif : {goal.toLocaleString("fr-FR")} €
                </span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-accent rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span className="flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  {data.count} donateur{data.count > 1 ? "s" : ""}
                </span>
                <span>{Math.round(progress)}%</span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {showSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="p-10 text-center"
                >
                  <div className="text-5xl mb-4">🎉</div>
                  <h4 className="font-display text-2xl font-bold text-foreground mb-2">
                    Merci !
                  </h4>
                  <p className="text-muted-foreground">
                    Votre don de{" "}
                    <span className="font-bold text-accent">
                      {lastDonation} €
                    </span>{" "}
                    a été enregistré.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-6"
                >
                  {/* Preset amounts */}
                  <p className="text-sm font-medium text-foreground mb-3">
                    Choisissez un montant
                  </p>
                  <div className="grid grid-cols-5 gap-2 mb-4">
                    {presetAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => {
                          setSelectedPreset(amount);
                          setCustomAmount("");
                        }}
                        className={`py-3 rounded-lg text-sm font-semibold transition-all ${
                          selectedPreset === amount
                            ? "bg-accent text-accent-foreground shadow-md"
                            : "bg-muted text-foreground hover:bg-muted/80"
                        }`}
                      >
                        {amount} €
                      </button>
                    ))}
                  </div>

                  {/* Custom amount */}
                  <div className="relative mb-6">
                    <input
                      type="number"
                      min="1"
                      placeholder="Autre montant"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedPreset(null);
                      }}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
                      €
                    </span>
                  </div>

                  {/* Donate button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleDonate}
                    disabled={currentAmount <= 0}
                    className="w-full py-4 rounded-xl bg-accent text-accent-foreground font-bold text-lg hover:bg-accent/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-accent/20 flex items-center justify-center gap-2"
                  >
                    <Heart className="w-5 h-5" />
                    Donner {currentAmount > 0 ? `${currentAmount} €` : ""}
                  </motion.button>

                  <p className="text-xs text-muted-foreground text-center mt-3">
                    🔒 Simulation — aucun paiement réel n'est effectué.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DonationModal;

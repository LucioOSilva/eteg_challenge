export const regexFormatCPF = (cpf?: string): string => {
  if (!cpf) return '';

  let cleaned = cpf.replace(/[^\d]/g, '');
  cleaned = cleaned.slice(0, 11);

  let cpfFormatted = cleaned;

  if (cleaned.length > 3) {
    cpfFormatted = cleaned.slice(0, 3) + '.' + cleaned.slice(3);
  }

  if (cleaned.length > 6) {
    cpfFormatted = cleaned.slice(0, 3) + '.' + cleaned.slice(3, 6) + '.' + cleaned.slice(6);
  }

  if (cleaned.length > 9) {
    cpfFormatted =
      cleaned.slice(0, 3) +
      '.' +
      cleaned.slice(3, 6) +
      '.' +
      cleaned.slice(6, 9) +
      '-' +
      cleaned.slice(9);
  }

  return cpfFormatted;
};

export const regexValidateCPF = (cpf?: string): boolean => {
  if (!cpf) return false;

  const hasCorrectLength = (value: string): boolean => {
    const CPF_VALID_SIZE = 11;
    return value.length === CPF_VALID_SIZE;
  };

  const hasAllSameDigits = (value: string): boolean => {
    const firstDigit = value[0];
    return value.split('').every((digit) => digit === firstDigit);
  };

  const generateFactors = (maxFactor: number, minFactor: number = 2): number[] => {
    const factors: number[] = [];
    for (let i = maxFactor; i >= minFactor; i--) {
      factors.push(i);
    }
    return factors;
  };

  const calculateDigit = (value: string, isFirstDigit: boolean = true): number => {
    const maxFactor = isFirstDigit ? 10 : 11;
    const factors = generateFactors(maxFactor);

    let resultSum = 0;
    factors.forEach((factor, index) => {
      resultSum += factor * parseInt(value[index]);
    });

    const remainder = resultSum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  };

  const cpfClean = cpf.replace(/[^\d]/g, '');

  if (!hasCorrectLength(cpfClean)) return false;
  if (hasAllSameDigits(cpfClean)) return false;

  const firstDigit = calculateDigit(cpfClean, true);
  const secondDigit = calculateDigit(cpfClean, false);

  const expectedDigits = `${firstDigit}${secondDigit}`;
  const actualDigits = cpfClean.slice(-2);

  return actualDigits === expectedDigits;
};

export const regexValidateEmail = (email: string): boolean => {
  if (!email) return false;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email.trim());
};
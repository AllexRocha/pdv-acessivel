// Dados dos produtos (seriam personalizados para o comerciante)
const products = [
  // 🥫 Alimentos
  { id: 1, name: "Arroz Flora - 1kg", price: 5.90, image: "images/arroz_quilo.jpg" },
  { id: 2, name: "Arroz Flora - 5kg", price: 24.90, image: "images/arroz_5kg.jpg" },
  { id: 3, name: "Feijão Mestre Cuca - 1kg", price: 6.50, image: "images/feijao.jpg" },
  { id: 4, name: "Farinha de Milho Flocada Bonomilho - 500g", price: 3.80, image: "images/cuzcuz.jpg" },
  { id: 5, name: "Milho verde em conserva Olé", price: 4.80, image: "images/milho_lata.jpg" },
  { id: 6, name: "Nissin Lámen sabor carne", price: 2.20, image: "images/miojo-carne.jpg" },
  { id: 7, name: "Creme de leite LeitBom - 200g", price: 3.50, image: "images/creme__leite.jpg" },
  { id: 8, name: "Leite Condensado Piracanjuba - 395g", price: 5.90, image: "images/consensado.jpg" },
  { id: 9, name: "Doce Pé de Moça unid", price: 1.20, image: "images/doce.jpg" },
  { id: 10, name: "Tempero Knorr Meu Segredo", price: 3.50, image: "images/knor.jpg" },
  { id: 11, name: "Óleo de Soja Soya - 900 ml", price: 7.20, image: "images/olho_soja.jpg" },
  { id: 12, name: "Sal Iodado Cristal 1kg", price: 3.50, image: "images/sal.jpg" },
  { id: 13, name: "Açúcar Cristal Imperial - 5kg", price: 12.90, image: "images/acucar.jpg" },
  { id: 14, name: "Sardinha Gomes da Costa", price: 7.90, image: "images/sardinha.jpg" },

  // 🥤 Bebidas
  { id: 15, name: "Guaraná Kuat - 1,5 L", price: 6.90, image: "images/kuat.jpg" },
  { id: 16, name: "Coca-Cola Retornável Zero - 2L", price: 8.90, image: "images/coca_retornavel_zero.jpg" },
  { id: 17, name: "Coca-Cola Lata - 310ml", price: 3.50, image: "images/coca_lata.jpg" },
  { id: 18, name: "Cerveja Kaiser - 350 ml", price: 3.20, image: "images/kaiser.jpg" },
  { id: 19, name: "Cerveja Amstel Lata - 250ml", price: 3.50, image: "images/amstel.jpg" },
  { id: 20, name: "Corote vários sabores - 500ml", price: 4.50, image: "images/corote.jpg" },
  { id: 21, name: "Água Mineral Crystal - 350ml", price: 2.20, image: "images/agua_mineral.jpg" },

  // 🧼 Higiene pessoal
  { id: 22, name: "Sabonete vários tipos", price: 2.80, image: "images/sabonete.jpg" },
  { id: 23, name: "Creme dental Sorriso", price: 3.90, image: "images/pasta.jpg" },
  { id: 24, name: "Papel Higiênico 4 rolos", price: 6.50, image: "images/papel_higienico.jpg" },
  { id: 25, name: "Pente Várias Cores", price: 1.50, image: "images/pente.jpg" },
  { id: 26, name: "Absorvente Cottonbaby", price: 4.90, image: "images/absorvente.jpg" },

  // 🧽 Limpeza
  { id: 27, name: "Sabão em pó ASSIM 800g", price: 9.90, image: "images/sabao_po.jpg" },
  { id: 28, name: "Detergente Ypê Neutro", price: 2.50, image: "images/detergente.jpg" },
  { id: 29, name: "Esponja de aço Bombril", price: 2.80, image: "images/bombril.jpg" },

  // 🍬 Doces e snacks
  { id: 30, name: "Pirulito Pop Vibe", price: 0.50, image: "images/pop.jpg" },
  { id: 31, name: "Pirulito Blong", price: 0.80, image: "images/pirulito.jpg" },
  { id: 32, name: "Chiclete Blong Energy", price: 0.80, image: "images/blong-energetico.jpg" },
  { id: 33, name: "Chiclete Blong Framboesa", price: 0.80, image: "images/blong_framboesa.jpg" },
  { id: 34, name: "Biscoito Recheado Bauducco", price: 2.50, image: "images/biscioito.jpg" },
  { id: 35, name: "Batata Palha Yoki", price: 6.90, image: "images/batata_palha.jpg" },
  { id: 36, name: "Super Azedinhos Docile", price: 1.00, image: "images/azedinho.jpg" },

  // 🖊️ Papelaria e escolares
  { id: 37, name: "Papel Ofício Chamex - 500 folhas", price: 22.00, image: "images/chamex.jpg" },
  { id: 38, name: "Cola Branca Escolar - 40g", price: 2.00, image: "images/cola_papel.jpg" },
  { id: 39, name: "Tinta guache Acrilex - 6 unid", price: 14.90, image: "images/guache.jpg" },
  { id: 40, name: "Caneta Bic Azul", price: 1.50, image: "images/canetas.jpg" },
  { id: 41, name: "Borracha Mercur", price: 1.20, image: "images/borrachas.jpg" },

  // 🔧 Utilidades domésticas
  { id: 42, name: "Pilha AAA 199 - 4 Unid", price: 8.90, image: "images/pilhas.jpg" },
  { id: 43, name: "Fósforo Guarany 10 caixas", price: 3.90, image: "images/fosforo_guarany.jpg" },
  { id: 44, name: "Carretel de Linha Corrente - 500m", price: 5.00, image: "images/carretel.jpg" }
];



// Variáveis globais
let cart = [];
let isHighContrast = false;
let isLargeText = false;
let merchantConfig = {
    name: "",
    city: "",
    pixKeyType: "CPF",
    pixKey: ""
};

// Configuração de paginação
const productsPerPage = 8;
let currentPage = 1;
let totalPages = Math.ceil(products.length / productsPerPage);

// Variável para senha (em um sistema real, isso seria armazenado de forma segura)
let configPassword = "123456"; // Senha padrão - deve ser alterada

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    loadConfiguration();
    loadProducts();
    setupEventListeners();
    updatePaginationInfo();
});

// Carrega a configuração salva
function loadConfiguration() {
    const savedConfig = localStorage.getItem('merchantConfig');
    if (savedConfig) {
        merchantConfig = JSON.parse(savedConfig);
        document.getElementById('merchantName').value = merchantConfig.name;
        document.getElementById('merchantCity').value = merchantConfig.city;
        document.getElementById('pixKeyType').value = merchantConfig.pixKeyType;
        document.getElementById('pixKey').value = merchantConfig.pixKey;
        
        // Esconde a seção de configuração se já estiver configurado
        document.getElementById('setupSection').style.display = 'none';
    }
}

// Salva a configuração
function saveConfiguration() {
    merchantConfig.name = document.getElementById('merchantName').value.trim();
    merchantConfig.city = document.getElementById('merchantCity').value.trim();
    merchantConfig.pixKeyType = document.getElementById('pixKeyType').value;
    merchantConfig.pixKey = document.getElementById('pixKey').value.trim();
    
    if (!merchantConfig.name || !merchantConfig.city || !merchantConfig.pixKey) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }
    
    localStorage.setItem('merchantConfig', JSON.stringify(merchantConfig));
    alert('Configuração salva com sucesso!');
    document.getElementById('setupSection').style.display = 'none';
}

// Função para mostrar o modal de senha
function showPasswordModal() {
    document.getElementById('passwordInput').value = '';
    document.getElementById('passwordModal').style.display = 'block';
}

// Função para esconder o modal de senha
function hidePasswordModal() {
    document.getElementById('passwordModal').style.display = 'none';
}

// Função para verificar a senha
function checkPassword() {
    const enteredPassword = document.getElementById('passwordInput').value;
    
    if (enteredPassword === configPassword) {
        hidePasswordModal();
        document.getElementById('setupSection').style.display = 'block';
        document.getElementById('setupSection').scrollIntoView({ behavior: 'smooth' });
    } else {
        alert('Senha incorreta. Tente novamente.');
        document.getElementById('passwordInput').value = '';
    }
}

// Carrega os produtos na grade com paginação
function loadProducts() {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';
    
    // Calcula os produtos a serem exibidos na página atual
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = Math.min(startIndex + productsPerPage, products.length);
    const productsToShow = products.slice(startIndex, endIndex);
    
    productsToShow.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product-item';
        productElement.dataset.id = product.id;
        
        let imageHtml = '';
        if (product.image) {
            imageHtml = `<img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />`;
        }
        
        imageHtml += `<div class="image-placeholder" style="${product.image ? 'display: none;' : ''}">${product.name}</div>`;
        
        productElement.innerHTML = `
            ${imageHtml}
            <div class="product-name">${product.name}</div>
            <div class="product-price">R$ ${product.price.toFixed(2)}</div>
        `;
        productGrid.appendChild(productElement);
    });
    
    // Atualiza os controles de paginação
    updatePaginationControls();
}

// Atualiza os controles de paginação
function updatePaginationControls() {
    const prevButton = document.getElementById('prevPage');
    const nextButton = document.getElementById('nextPage');
    
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
}

// Atualiza a informação de página
function updatePaginationInfo() {
    document.getElementById('pageInfo').textContent = `Página ${currentPage} de ${totalPages}`;
}

// Navega para a página anterior
function goToPrevPage() {
    if (currentPage > 1) {
        currentPage--;
        loadProducts();
        updatePaginationInfo();
    }
}

// Navega para a próxima página
function goToNextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        loadProducts();
        updatePaginationInfo();
    }
}

// Configura os event listeners
function setupEventListeners() {
    // Adicionar produto ao carrinho
    document.getElementById('productGrid').addEventListener('click', function(e) {
        const productItem = e.target.closest('.product-item');
        if (productItem) {
            const productId = parseInt(productItem.dataset.id);
            addToCart(productId);
            
            // Feedback visual
            productItem.style.transform = 'scale(0.95)';
            setTimeout(() => {
                productItem.style.transform = '';
            }, 200);
        }
    });
    
    // Limpar carrinho
    document.getElementById('clearCart').addEventListener('click', clearCart);
    
    // Gerar PIX
    document.getElementById('generatePix').addEventListener('click', generatePix);
    
    // Nova venda
    document.getElementById('newSale').addEventListener('click', newSale);
    
    // Salvar configuração
    document.getElementById('saveConfig').addEventListener('click', saveConfiguration);
    
    // Controles de paginação
    document.getElementById('prevPage').addEventListener('click', goToPrevPage);
    document.getElementById('nextPage').addEventListener('click', goToNextPage);
    
    // Controles de acessibilidade
    document.getElementById('contrastToggle').addEventListener('click', toggleContrast);
    document.getElementById('textSizeToggle').addEventListener('click', toggleTextSize);
    
    // Reabrir configuração do PIX com senha
    document.getElementById('reopenPixConfig').addEventListener('click', showPasswordModal);
    
    // Modal de senha
    document.getElementById('confirmPassword').addEventListener('click', checkPassword);
    document.getElementById('cancelPassword').addEventListener('click', hidePasswordModal);
    
    // Fechar modal clicando fora dele
    window.addEventListener('click', function(e) {
        if (e.target === document.getElementById('passwordModal')) {
            hidePasswordModal();
        }
    });
}

// Adiciona produto ao carrinho
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    updateCart();
    
    // Feedback visual de adição
    const addedProduct = document.querySelector(`.product-item[data-id="${productId}"]`);
    if (addedProduct) {
        addedProduct.classList.add('product-added');
        setTimeout(() => {
            addedProduct.classList.remove('product-added');
        }, 500);
    }
}

// Atualiza a exibição do carrinho
function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    // Limpa o carrinho
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart-message">Nenhum produto adicionado ainda.</div>';
        cartTotal.textContent = 'Total: R$ 0,00';
        return;
    }
    
    // Adiciona os itens ao carrinho
    let total = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        
        let imageHtml = '';
        if (item.image) {
            imageHtml = `<img src="${item.image}" alt="${item.name}" class="cart-item-image" onerror="this.style.display='none';" />`;
        } else {
            imageHtml = `<div class="cart-item-image" style="background-color: #f0f0f0; display: flex; align-items: center; justify-content: center; font-size: 10px;">${item.name.substring(0, 10)}</div>`;
        }
        
        cartItem.innerHTML = `
            ${imageHtml}
            <div class="cart-item-info">
                <span>${item.name} x${item.quantity}</span>
                <span>R$ ${itemTotal.toFixed(2)}</span>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    
    // Atualiza o total
    cartTotal.textContent = `Total: R$ ${total.toFixed(2)}`;
}

// Limpa o carrinho
function clearCart() {
    cart = [];
    updateCart();
}

// Gera o QR Code PIX
function generatePix() {
    if (cart.length === 0) {
        alert('Adicione produtos ao carrinho antes de gerar o PIX.');
        return;
    }
    
    // Verifica se a configuração foi feita
    if (!merchantConfig.pixKey) {
        alert('Por favor, configure os dados do comerciante primeiro.');
        showPasswordModal();
        return;
    }
    
    // Calcula o total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Formata o payload PIX conforme o padrão do BACEN
    const pixPayload = generatePixPayload(total);
    
    console.log("Payload PIX gerado:", pixPayload); // Para debug
    
    // Gera o QR Code
    const qrCodeElement = document.getElementById('qrcode');
    qrCodeElement.innerHTML = '';
    
    try {
        new QRCode(qrCodeElement, {
            text: pixPayload,
            width: 200,
            height: 200,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
        
        // Exibe a seção PIX
        document.getElementById('pixSection').style.display = 'block';
        
        // Rola a página para a seção PIX
        document.getElementById('pixSection').scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
        console.error("Erro ao gerar QR Code:", error);
        alert("Erro ao gerar QR Code. Verifique o console para mais detalhes.");
    }
}

// Gera o payload PIX conforme padrão do BACEN (versão final corrigida)
function generatePixPayload(amount) {
    const gui = "BR.GOV.BCB.PIX";
    const key = formatPixKey(); // Chave PIX formatada corretamente
    
    // Constrói a parte da conta do merchant
    const merchantAccount = `0014${gui}01${key.length.toString().padStart(2, '0')}${key}`;
    
    // Constrói o payload
    let payload = "";
    payload += formatField("00", "01"); // Payload Format Indicator
    payload += formatField("26", merchantAccount); // Merchant Account Information
    payload += formatField("52", "0000"); // Merchant Category Code
    payload += formatField("53", "986"); // Transaction Currency
    
    // Adiciona o campo de valor apenas se for maior que zero
    if (amount > 0) {
        // CORREÇÃO: Manter o valor com ponto decimal para o PIX
        const amountStr = amount.toFixed(2); // Mantém o formato 3.20
        payload += formatField("54", amountStr); // Transaction Amount
    }
    
    payload += formatField("58", "BR"); // Country Code
    payload += formatField("59", formatString(merchantConfig.name, 25)); // Merchant Name
    payload += formatField("60", formatString(merchantConfig.city, 15)); // Merchant City
    payload += formatField("62", "0503***"); // Additional Data Field
    
    // Adiciona o CRC16
    payload += "6304";
    const crc = calculateCRC16(payload);
    payload += crc.toString(16).toUpperCase().padStart(4, '0');
    
    return payload;
}

// Formata a chave PIX de acordo com o tipo
function formatPixKey() {
    let key = merchantConfig.pixKey;
    
    // Remove caracteres não numéricos para CPF, CNPJ e telefone
    if (merchantConfig.pixKeyType === "CPF" || merchantConfig.pixKeyType === "CNPJ" || merchantConfig.pixKeyType === "PHONE") {
        key = key.replace(/\D/g, '');
    }
    
    return key;
}

// Formata campo para o payload
function formatField(id, value) {
    return id + value.length.toString().padStart(2, '0') + value;
}

// Formata string para tamanho máximo
function formatString(str, maxLength) {
    return str.substring(0, maxLength).toUpperCase();
}

// Calcula CRC16 para o payload (implementação corrigida)
function calculateCRC16(data) {
    const polynomial = 0x1021;
    let crc = 0xFFFF;
    
    for (let i = 0; i < data.length; i++) {
        crc ^= data.charCodeAt(i) << 8;
        
        for (let j = 0; j < 8; j++) {
            if (crc & 0x8000) {
                crc = (crc << 1) ^ polynomial;
            } else {
                crc = crc << 1;
            }
            crc &= 0xFFFF; // Mantém apenas 16 bits
        }
    }
    
    return crc;
}

// Prepara uma nova venda
function newSale() {
    clearCart();
    document.getElementById('pixSection').style.display = 'none';
}

// Alterna o modo de alto contraste
function toggleContrast() {
    isHighContrast = !isHighContrast;
    document.body.classList.toggle('high-contrast-mode', isHighContrast);
}

// Alterna o tamanho do texto
function toggleTextSize() {
    isLargeText = !isLargeText;
    document.body.classList.toggle('text-large', isLargeText);
}
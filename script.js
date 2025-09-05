// Dados dos produtos (seriam personalizados para o comerciante)
const products = [
    { id: 1, name: "Arroz 5kg", price: 22.90, image: "https://cdn.awsli.com.br/600x450/0/0/produto/3853027/arroz_cristal_5kg-4c4df5c5d8.jpg" },
    { id: 2, name: "Feijão 1kg", price: 8.50, image: "https://cdn.awsli.com.br/600x450/0/0/produto/3853030/feijao_carioca-3c5d2f6b6a.jpg" },
    { id: 3, name: "Açúcar 1kg", price: 4.25, image: "https://cdn.awsli.com.br/600x450/0/0/produto/3853032/acucar_cristal-3c5d2f6b6a.jpg" },
    { id: 4, name: "Café 500g", price: 12.90, image: "https://cdn.awsli.com.br/600x450/0/0/produto/3853034/cafe_melitta-3c5d2f6b6a.jpg" },
    { id: 5, name: "Óleo 900ml", price: 7.80, image: "https://cdn.awsli.com.br/600x450/0/0/produto/3853036/oleo_soja-3c5d2f6b6a.jpg" },
    { id: 6, name: "Sal 1kg", price: 3.20, image: "https://cdn.awsli.com.br/600x450/0/0/produto/3853038/sal_refinado-3c5d2f6b6a.jpg" },
    { id: 7, name: "Farinha 1kg", price: 4.50, image: "https://cdn.awsli.com.br/600x450/0/0/produto/3853040/farinha_trigo-3c5d2f6b6a.jpg" },
    { id: 8, name: "Macarrão 500g", price: 4.30, image: "https://cdn.awsli.com.br/600x450/0/0/produto/3853042/macarrao_parafuso-3c5d2f6b6a.jpg" },
    { id: 9, name: "Leite 1L", price: 5.20, image: "https://cdn.awsli.com.br/600x450/0/0/produto/3853044/leite_uht-3c5d2f6b6a.jpg" },
    { id: 10, name: "Manteiga 200g", price: 9.80, image: "https://cdn.awsli.com.br/600x450/0/0/produto/3853046/manteiga-3c5d2f6b6a.jpg" },
    { id: 11, name: "Ovo (dúzia)", price: 10.00, image: "https://cdn.awsli.com.br/600x450/0/0/produto/3853048/ovos-3c5d2f6b6a.jpg" },
    { id: 12, name: "Pão (unidade)", price: 0.70, image: "https://cdn.awsli.com.br/600x450/0/0/produto/3853050/pao_frances-3c5d2f6b6a.jpg" },
    { id: 13, name: "Queijo 500g", price: 22.00, image: "https://cdn.awsli.com.br/600x450/0/0/produto/3853052/queijo_mussarela-3c5d2f6b6a.jpg" },
    { id: 14, name: "Presunto 500g", price: 18.00, image: "https://cdn.awsli.com.br/600x450/0/0/produto/3853054/presunto-3c5d2f6b6a.jpg" },
    { id: 15, name: "Refrigerante 2L", price: 9.50, image: "https://cdn.awsli.com.br/600x450/0/0/produto/3853056/refrigerante_cola-3c5d2f6b6a.jpg" },
    { id: 16, name: "Sabão em Pó", price: 12.00, image: "https://example.com/sabao.jpg" },
    { id: 17, name: "Detergente", price: 3.50, image: "https://example.com/detergente.jpg" },
    { id: 18, name: "Shampoo", price: 15.00, image: "https://example.com/shampoo.jpg" },
    { id: 19, name: "Condicionador", price: 16.00, image: "https://example.com/condicionador.jpg" },
    { id: 20, name: "Creme Dental", price: 5.50, image: "https://example.com/creme-dental.jpg" }
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
# Ativar o novo acesso administrativo

O painel em `admin.html` usa Firebase Authentication e só libera a interface para
contas que tenham um documento ativo na coleção `admins`.

1. No Firebase Console, abra **Authentication > Sign-in method** e ative
   **Email/Password**.
2. Em **Authentication > Users**, crie o utilizador administrador com o e-mail e
   a palavra-passe que serão usados no painel. Copie o respetivo UID.
3. Em **Firestore Database**, crie o documento `admins/<UID>` com o campo
   booleano `ativo: true`.
4. Publique o conteúdo de `firestore.rules` em **Firestore Database > Rules**.
   As regras permitem a leitura pública dos produtos, mas reservam a gestão do
   catálogo, pedidos e configurações para administradores autenticados.

Nunca volte a guardar uma senha de administrador no HTML, JavaScript ou
Firestore. Se a senha antiga já foi usada num ambiente publicado, altere-a e
considere-a exposta.

## Ativar uma conta parceira

O cadastro de parceiro agora cria o utilizador no Firebase Authentication e salva
os dados da empresa no documento `empresas/<UID>`, sem senha no Firestore. Para
liberar o painel do parceiro, altere o campo booleano `status` desse documento
para o valor de texto `ativo`. Enquanto estiver como `pendente`, a conta não
entra no painel.

## Contas de clientes e cupons

Os clientes criam a conta em `conta.html` com e-mail e palavra-passe. Cada novo
pedido feito por uma conta é associado a esse cliente e começa como `pendente`.
No `admin.html`, abra **Pedidos Recentes** e marque o pedido como **concluído**
somente depois de ele ser realmente atendido. Apenas pedidos concluídos contam
para os cupons de fidelidade.

Em **Cupons de Fidelidade** no painel admin, é possível ativar ou desativar os
cupons e editar percentual e quantidade necessária de pedidos. Por padrão, o
cupom de 10% exige 100 pedidos concluídos e o de 15% exige 200. O carrinho
mostra automaticamente os benefícios disponíveis e gera um comprovativo
imprimível quando um cupom é aplicado.

## Pagamentos

Antes de confirmar o pedido, o cliente escolhe Multicaixa Express,
transferência por IBAN, Unitel Money ou pagamento na entrega. O método aparece
no comprovativo, na mensagem de WhatsApp e na área de pedidos do administrador.
Todo pedido começa como `pendente`; marque-o como concluído somente depois de
confirmar o pagamento ou a entrega.

## Imagens dos produtos

Este projeto não usa Firebase Storage. Para cada produto, cole um link direto
para a imagem no campo **Link da imagem principal**. Para fotos de cada cor,
use os campos de links correspondentes. O endereço precisa terminar ou apontar
diretamente para um ficheiro de imagem acessível publicamente, por exemplo
`https://site.com/produto-preto.jpg`.

Não é possível guardar uma imagem escolhida no computador/telemóvel sem algum
serviço de alojamento. Pode usar links de imagens já publicadas (por exemplo,
no seu próprio site, Imgur, Cloudinary ou outro alojamento público). O site
exibe esses links normalmente e não exige conta Firebase Storage.

## Publicar as regras do Firestore

Copie o conteúdo de `firestore.rules` para **Firestore Database > Rules** no
Firebase Console e clique em **Publish**. É a única regra que precisa publicar
para este projeto.

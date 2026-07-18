# Assignment 02 Solution:

**Q-1. If $\varphi(x,y,z) = 3x^2y - y^3z^2$, find $\nabla\varphi$ at the point $(1, -2, -1)$.**

**Solution**

$$\nabla\varphi = \frac{\partial\varphi}{\partial x}\hat{i} + \frac{\partial\varphi}{\partial y}\hat{j} + \frac{\partial\varphi}{\partial z}\hat{k}$$

$\dfrac{\partial\varphi}{\partial x} = 6xy, \qquad \dfrac{\partial\varphi}{\partial y} = 3x^2 - 3y^2z^2, \qquad \dfrac{\partial\varphi}{\partial z} = -2y^3z$

At $(1,\ -2,\ -1)$:

$\dfrac{\partial\varphi}{\partial x} = 6(1)(-2) = -12$

$\dfrac{\partial\varphi}{\partial y} = 3(1)^2 - 3(-2)^2(-1)^2 = 3 - 12 = -9$

$\dfrac{\partial\varphi}{\partial z} = -2(-2)^3(-1) = -2(-8)(-1) = -16$

$$\boxed{\nabla\varphi = -12\hat{i} - 9\hat{j} - 16\hat{k}}$$

---

**Q-4. Show that $\nabla r^n = nr^{n-2}\vec{r}$, where $\vec{r} = x\hat{i} + y\hat{j} + z\hat{k}$.**

**Solution**

Here $r = |\vec{r}| = \sqrt{x^2+y^2+z^2}$, so:

$$\frac{\partial r}{\partial x} = \frac{x}{r}, \qquad \frac{\partial r}{\partial y} = \frac{y}{r}, \qquad \frac{\partial r}{\partial z} = \frac{z}{r}$$

$$\nabla r^n = \frac{\partial r^n}{\partial x}\hat{i} + \frac{\partial r^n}{\partial y}\hat{j} + \frac{\partial r^n}{\partial z}\hat{k}$$

$\dfrac{\partial r^n}{\partial x} = nr^{n-1}\cdot\dfrac{\partial r}{\partial x} = nr^{n-1}\cdot\dfrac{x}{r} = nxr^{n-2}$

$\Rightarrow \dfrac{\partial r^n}{\partial y} = nyr^{n-2}, \qquad \dfrac{\partial r^n}{\partial z} = nzr^{n-2}$

$\Rightarrow \nabla r^n = nxr^{n-2}\hat{i} + nyr^{n-2}\hat{j} + nzr^{n-2}\hat{k}$

$\Rightarrow \nabla r^n = nr^{n-2}(x\hat{i}+y\hat{j}+z\hat{k})$

$$\boxed{\nabla r^n = nr^{n-2}\vec{r}} \qquad \blacksquare$$

---

**Q-5. Show that $\nabla\varphi$ is a vector perpendicular to the surface $\varphi(x,y,z) = c$ where $c$ is a constant.**

**Solution**

Let $\vec{r}(t) = x(t)\hat{i} + y(t)\hat{j} + z(t)\hat{k}$ be any arbitrary curve lying on the surface $\varphi(x,y,z) = c$.

Since every point of the curve lies on the surface:

$$\varphi(x(t),\ y(t),\ z(t)) = c$$

Differentiating both sides with respect to $t$:

$$\frac{\partial\varphi}{\partial x}\frac{dx}{dt} + \frac{\partial\varphi}{\partial y}\frac{dy}{dt} + \frac{\partial\varphi}{\partial z}\frac{dz}{dt} = 0$$

$\Rightarrow \nabla\varphi \cdot \dfrac{d\vec{r}}{dt} = 0$

Since $\dfrac{d\vec{r}}{dt}$ is tangent to the curve lying on the surface, and this holds for **any** curve on the surface, $\nabla\varphi$ is perpendicular to every tangent vector on the surface.

$$\boxed{\therefore\ \nabla\varphi \text{ is perpendicular to the surface } \varphi(x,y,z) = c} \qquad \blacksquare$$

---

**Q-7. Find the equation of the tangent plane to the surface $2xz^2 - 3xy - 4x = 7$ at the point $(1,\ -1,\ 2)$.**

**Solution**

Let $F(x,y,z) = 2xz^2 - 3xy - 4x - 7 = 0$

The normal to the surface is $\nabla F$:

$$\nabla F = \frac{\partial F}{\partial x}\hat{i} + \frac{\partial F}{\partial y}\hat{j} + \frac{\partial F}{\partial z}\hat{k}$$

$\dfrac{\partial F}{\partial x} = 2z^2 - 3y - 4, \qquad \dfrac{\partial F}{\partial y} = -3x, \qquad \dfrac{\partial F}{\partial z} = 4xz$

At $(1,\ -1,\ 2)$:

$\dfrac{\partial F}{\partial x} = 2(4) - 3(-1) - 4 = 8+3-4 = 7$

$\dfrac{\partial F}{\partial y} = -3(1) = -3$

$\dfrac{\partial F}{\partial z} = 4(1)(2) = 8$

The tangent plane equation is:

$7(x-1) - 3(y+1) + 8(z-2) = 0$

$\Rightarrow 7x - 7 - 3y - 3 + 8z - 16 = 0$

$$\boxed{7x - 3y + 8z = 26}$$

---

**Q-10. Find the directional derivative of $\varphi = x^2yz + 4xz^2$ at $(1,\ -2,\ -1)$ in the direction $2\hat{i} - \hat{j} - 2\hat{k}$.**

**Solution**

$$\nabla\varphi = \frac{\partial\varphi}{\partial x}\hat{i} + \frac{\partial\varphi}{\partial y}\hat{j} + \frac{\partial\varphi}{\partial z}\hat{k}$$

$\dfrac{\partial\varphi}{\partial x} = 2xyz + 4z^2, \qquad \dfrac{\partial\varphi}{\partial y} = x^2z, \qquad \dfrac{\partial\varphi}{\partial z} = x^2y + 8xz$

At $(1,\ -2,\ -1)$:

$\dfrac{\partial\varphi}{\partial x} = 2(1)(-2)(-1) + 4(1) = 4+4 = 8$

$\dfrac{\partial\varphi}{\partial y} = (1)^2(-1) = -1$

$\dfrac{\partial\varphi}{\partial z} = (1)^2(-2) + 8(1)(-1) = -2-8 = -10$

$\Rightarrow \nabla\varphi = 8\hat{i} - \hat{j} - 10\hat{k}$

Unit vector in the direction $\vec{a} = 2\hat{i} - \hat{j} - 2\hat{k}$:

$|\vec{a}| = \sqrt{4+1+4} = \sqrt{9} = 3$

$\Rightarrow \hat{a} = \dfrac{2\hat{i} - \hat{j} - 2\hat{k}}{3}$

Directional derivative:

$D_{\hat{a}}\varphi = \nabla\varphi \cdot \hat{a} = (8\hat{i} - \hat{j} - 10\hat{k}) \cdot \dfrac{(2\hat{i}-\hat{j}-2\hat{k})}{3}$

$\Rightarrow = \dfrac{(8)(2)+(-1)(-1)+(-10)(-2)}{3}$

$\Rightarrow = \dfrac{16+1+20}{3}$

$$\boxed{D_{\hat{a}}\varphi = \dfrac{37}{3}}$$

**Q-11. (a) In what direction from the point $(2,1,-1)$ is the directional derivative of $\varphi = x^2y^2z^3$ a maximum? (b) What is the magnitude of this maximum?**

**Solution**

The directional derivative is maximum in the direction of $\nabla\varphi$, and the maximum value equals $|\nabla\varphi|$.

$$\nabla\varphi = \frac{\partial\varphi}{\partial x}\hat{i} + \frac{\partial\varphi}{\partial y}\hat{j} + \frac{\partial\varphi}{\partial z}\hat{k} = 2xy^2z^3\hat{i} + 2x^2yz^3\hat{j} + 3x^2y^2z^2\hat{k}$$

At $(2,\ 1,\ -1)$:

$\dfrac{\partial\varphi}{\partial x} = 2(2)(1)^2(-1)^3 = -4$

$\dfrac{\partial\varphi}{\partial y} = 2(2)^2(1)(-1)^3 = -8$

$\dfrac{\partial\varphi}{\partial z} = 3(2)^2(1)^2(-1)^2 = 12$

$\Rightarrow \nabla\varphi = -4\hat{i} - 8\hat{j} + 12\hat{k}$

**(a)** The directional derivative is maximum in the direction of:

$$\boxed{\nabla\varphi = -4\hat{i} - 8\hat{j} + 12\hat{k}}$$

**(b)** The magnitude of this maximum:

$|\nabla\varphi| = \sqrt{(-4)^2+(-8)^2+(12)^2} = \sqrt{16+64+144} = \sqrt{224}$

$$\boxed{|\nabla\varphi| = 4\sqrt{14}}$$

---

**Q-12. Find the angle between the surfaces $x^2+y^2+z^2=9$ and $z=x^2+y^2-3$ at the point $(2,-1,2)$.**

**Solution**

Let $F_1 = x^2+y^2+z^2-9 = 0$ and $F_2 = x^2+y^2-z-3 = 0$

$$\nabla F_1 = 2x\hat{i}+2y\hat{j}+2z\hat{k}$$

$\Rightarrow$ at $(2,-1,2)$: $\nabla F_1 = 4\hat{i}-2\hat{j}+4\hat{k}$

$$\nabla F_2 = 2x\hat{i}+2y\hat{j}-\hat{k}$$

$\Rightarrow$ at $(2,-1,2)$: $\nabla F_2 = 4\hat{i}-2\hat{j}-\hat{k}$

The angle between the surfaces is the angle between their normals:

$$\cos\theta = \frac{\nabla F_1 \cdot \nabla F_2}{|\nabla F_1|\ |\nabla F_2|}$$

$\nabla F_1 \cdot \nabla F_2 = (4)(4)+(-2)(-2)+(4)(-1) = 16+4-4 = 16$

$|\nabla F_1| = \sqrt{16+4+16} = \sqrt{36} = 6$

$|\nabla F_2| = \sqrt{16+4+1} = \sqrt{21}$

$\Rightarrow \cos\theta = \dfrac{16}{6\sqrt{21}} = \dfrac{8}{3\sqrt{21}}$

$$\boxed{\theta = \cos^{-1}\left(\frac{8}{3\sqrt{21}}\right)}$$

---

**Q-17. Prove that $\nabla^2\left(\dfrac{1}{r}\right) = 0$, where $\vec{r} = x\hat{i}+y\hat{j}+z\hat{k}$.**

**Solution**

Using the result $\nabla r^n = nr^{n-2}\vec{r}$ (Q-4) with $n = -1$:

$$\nabla\left(\frac{1}{r}\right) = -r^{-3}\vec{r} = -\frac{\vec{r}}{r^3}$$

$\Rightarrow \nabla^2\left(\dfrac{1}{r}\right) = \nabla\cdot\nabla\left(\dfrac{1}{r}\right) = -\nabla\cdot\left(\dfrac{\vec{r}}{r^3}\right)$

Now computing $\nabla\cdot\left(\dfrac{\vec{r}}{r^3}\right) = \dfrac{\partial}{\partial x}\left(\dfrac{x}{r^3}\right) + \dfrac{\partial}{\partial y}\left(\dfrac{y}{r^3}\right) + \dfrac{\partial}{\partial z}\left(\dfrac{z}{r^3}\right)$

$\dfrac{\partial}{\partial x}\left(\dfrac{x}{r^3}\right) = \dfrac{1}{r^3} + x\cdot\left(\dfrac{-3x}{r^5}\right) = \dfrac{1}{r^3} - \dfrac{3x^2}{r^5}$

Similarly: $\dfrac{\partial}{\partial y}\left(\dfrac{y}{r^3}\right) = \dfrac{1}{r^3} - \dfrac{3y^2}{r^5}$ and $\dfrac{\partial}{\partial z}\left(\dfrac{z}{r^3}\right) = \dfrac{1}{r^3} - \dfrac{3z^2}{r^5}$

$\Rightarrow \nabla\cdot\left(\dfrac{\vec{r}}{r^3}\right) = \dfrac{3}{r^3} - \dfrac{3(x^2+y^2+z^2)}{r^5} = \dfrac{3}{r^3} - \dfrac{3r^2}{r^5} = \dfrac{3}{r^3} - \dfrac{3}{r^3} = 0$

$$\boxed{\therefore\ \nabla^2\left(\frac{1}{r}\right) = 0} \qquad \blacksquare$$



**Q-22. Determine the constant $c$ such that the vector $\vec{V} = (x+y)\hat{i} + (bx+cy-z)\hat{j} + (x+2y+2z)\hat{k}$ is solenoidal.**

**Solution**

For a vector to be solenoidal, $\nabla\cdot\vec{V} = 0$:

$$\nabla\cdot\vec{V} = \frac{\partial}{\partial x}(x+y) + \frac{\partial}{\partial y}(bx+cy-z) + \frac{\partial}{\partial z}(x+2y+2z)$$

$\Rightarrow 1 + c + 2 = 0$

$\Rightarrow c + 3 = 0$

$$\boxed{c = -3}$$


**Q-23. If $\vec{A} = x^2y\hat{i} - 2xyz\hat{j} + 2yz^2\hat{k}$, find $\nabla\times\vec{A}$ (or curl $\vec{A}$) at the point $(1,1,1)$.**

**Solution**

$$\nabla\times\vec{A} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ \dfrac{\partial}{\partial x} & \dfrac{\partial}{\partial y} & \dfrac{\partial}{\partial z} \\ x^2y & -2xyz & 2yz^2 \end{vmatrix}$$

$\Rightarrow \hat{i}\left(\dfrac{\partial(2yz^2)}{\partial y} - \dfrac{\partial(-2xyz)}{\partial z}\right) - \hat{j}\left(\dfrac{\partial(2yz^2)}{\partial x} - \dfrac{\partial(x^2y)}{\partial z}\right) + \hat{k}\left(\dfrac{\partial(-2xyz)}{\partial x} - \dfrac{\partial(x^2y)}{\partial y}\right)$

$\Rightarrow \hat{i}(2z^2 - (-2xy)) - \hat{j}(0 - 0) + \hat{k}(-2yz - x^2)$

$\Rightarrow (2z^2+2xy)\hat{i} + 0\hat{j} + (-2yz-x^2)\hat{k}$

At $(1,\ 1,\ 1)$:

$\Rightarrow (2+2)\hat{i} + (-2-1)\hat{k}$

$$\boxed{\nabla\times\vec{A} = 4\hat{i} - 3\hat{k}}$$

Q-12. If $\phi(x,y,z)=3x^{2}y-y^{3}z^{2}$, find $\nabla\phi$ (or $\text{grad }\phi$) at the point $(1, -2, -1)$. 

**Solution:** The gradient of a scalar function $\phi(x, y, z)$ in three-dimensional Cartesian space is defined by the vector differential operator $\nabla$ (del):


$$\nabla\phi = \frac{\partial\phi}{\partial x}\hat{i} + \frac{\partial\phi}{\partial y}\hat{j} + \frac{\partial\phi}{\partial z}\hat{k}$$

Given the scalar field function:


$$\phi(x,y,z) = 3x^{2}y - y^{3}z^{2}$$

We compute the first-order partial derivatives with respect to each variable independently.

Differentiating $\phi$ partially with respect to $x$ (treating $y$ and $z$ as constants):
$\implies \frac{\partial\phi}{\partial x} = \frac{\partial}{\partial x}(3x^{2}y - y^{3}z^{2})$
$\implies \frac{\partial\phi}{\partial x} = 6xy - 0$
$\implies \frac{\partial\phi}{\partial x} = 6xy$

Differentiating $\phi$ partially with respect to $y$ (treating $x$ and $z$ as constants):
$\implies \frac{\partial\phi}{\partial y} = \frac{\partial}{\partial y}(3x^{2}y - y^{3}z^{2})$
$\implies \frac{\partial\phi}{\partial y} = 3x^{2}(1) - 3y^{2}z^{2}$
$\implies \frac{\partial\phi}{\partial y} = 3x^{2} - 3y^{2}z^{2}$

Differentiating $\phi$ partially with respect to $z$ (treating $x$ and $y$ as constants):
$\implies \frac{\partial\phi}{\partial z} = \frac{\partial}{\partial z}(3x^{2}y - y^{3}z^{2})$
$\implies \frac{\partial\phi}{\partial z} = 0 - y^{3}(2z)$
$\implies \frac{\partial\phi}{\partial z} = -2y^{3}z$

Substituting these partial derivatives back into the vector definition statement for $\nabla\phi$:


$$\implies \nabla\phi = (6xy)\hat{i} + (3x^{2} - 3y^{2}z^{2})\hat{j} + (-2y^{3}z)\hat{k}$$

Now, we evaluate the exact components of this vector field at the specified point $(x, y, z) = (1, -2, -1)$:

Evaluating the $\hat{i}$ component:
$\implies 6xy = 6(1)(-2)$
$\implies 6xy = -12$

Evaluating the $\hat{j}$ component:
$\implies 3x^{2} - 3y^{2}z^{2} = 3(1)^{2} - 3(-2)^{2}(-1)^{2}$
$\implies 3x^{2} - 3y^{2}z^{2} = 3(1) - 3(4)(1)$
$\implies 3x^{2} - 3y^{2}z^{2} = 3 - 12$
$\implies 3x^{2} - 3y^{2}z^{2} = -9$

Evaluating the $\hat{k}$ component:
$\implies -2y^{3}z = -2(-2)^{3}(-1)$
$\implies -2y^{3}z = -2(-8)(-1)$
$\implies -2y^{3}z = -16$

Combining these numerical scalar components back into our vector format:


$$\implies \nabla\phi = -12\hat{i} - 9\hat{j} - 16\hat{k}$$

The value of $\text{grad }\phi$ at the point $(1, -2, -1)$ is:


$$\nabla\phi = -12\hat{i} - 9\hat{j} - 16\hat{k}$$


Q-17. Prove that $\nabla^{2}\left(\frac{1}{r}\right)=0$ where $\vec{r}=x\hat{i}+y\hat{j}+z\hat{k}$. 

**Solution:** Let the position vector be defined as:
$$\vec{r} = x\hat{i} + y\hat{j} + z\hat{k}$$

The magnitude $r$ satisfies the relation:

$$r = \sqrt{x^2 + y^2 + z^2}$$
$$\implies r^2 = x^2 + y^2 + z^2$$

Differentiating partially with respect to $x$ on both sides:
$\implies 2r\frac{\partial r}{\partial x} = 2x$
$\implies \frac{\partial r}{\partial x} = \frac{x}{r}$

By symmetry, the partial derivatives with respect to $y$ and $z$ are:


$$\frac{\partial r}{\partial y} = \frac{y}{r} \quad \text{and} \quad \frac{\partial r}{\partial z} = \frac{z}{r}$$

The Laplacian operator $\nabla^2$ acting on a scalar function is defined as:


$$\nabla^2\left(\frac{1}{r}\right) = \frac{\partial^2}{\partial x^2}\left(\frac{1}{r}\right) + \frac{\partial^2}{\partial y^2}\left(\frac{1}{r}\right) + \frac{\partial^2}{\partial z^2}\left(\frac{1}{r}\right)$$

First, we find the first-order partial derivative with respect to $x$ using the chain rule:
$\implies \frac{\partial}{\partial x}\left(\frac{1}{r}\right) = -\frac{1}{r^2} \cdot \frac{\partial r}{\partial x}$
$\implies \frac{\partial}{\partial x}\left(\frac{1}{r}\right) = -\frac{1}{r^2} \cdot \left(\frac{x}{r}\right) = -x r^{-3}$

Now, we find the second-order partial derivative with respect to $x$ using the product rule:
$\implies \frac{\partial^2}{\partial x^2}\left(\frac{1}{r}\right) = \frac{\partial}{\partial x}\left(-x r^{-3}\right)$
$\implies \frac{\partial^2}{\partial x^2}\left(\frac{1}{r}\right) = (-1)r^{-3} + (-x)\left(-3r^{-4}\frac{\partial r}{\partial x}\right)$
$\implies \frac{\partial^2}{\partial x^2}\left(\frac{1}{r}\right) = -\frac{1}{r^3} + 3xr^{-4}\left(\frac{x}{r}\right)$
$\implies \frac{\partial^2}{\partial x^2}\left(\frac{1}{r}\right) = -\frac{1}{r^3} + \frac{3x^2}{r^5}$

By symmetry, the second-order partial derivatives with respect to $y$ and $z$ are:


$$\frac{\partial^2}{\partial y^2}\left(\frac{1}{r}\right) = -\frac{1}{r^3} + \frac{3y^2}{r^5}$$

$$\frac{\partial^2}{\partial z^2}\left(\frac{1}{r}\right) = -\frac{1}{r^3} + \frac{3z^2}{r^5}$$

Substituting these three expressions back into the definition for $\nabla^2\left(\frac{1}{r}\right)$:
$\implies \nabla^2\left(\frac{1}{r}\right) = \left(-\frac{1}{r^3} + \frac{3x^2}{r^5}\right) + \left(-\frac{1}{r^3} + \frac{3y^2}{r^5}\right) + \left(-\frac{1}{r^3} + \frac{3z^2}{r^5}\right)$
$\implies \nabla^2\left(\frac{1}{r}\right) = -\frac{3}{r^3} + \frac{3(x^2 + y^2 + z^2)}{r^5}$

Substituting $x^2 + y^2 + z^2 = r^2$ into the numerator:
$\implies \nabla^2\left(\frac{1}{r}\right) = -\frac{3}{r^3} + \frac{3(r^2)}{r^5}$
$\implies \nabla^2\left(\frac{1}{r}\right) = -\frac{3}{r^3} + \frac{3}{r^3}$

$\implies \nabla^2\left(\frac{1}{r}\right) = 0$

**Hence Proved.**

**Q-24. If $\vec{A} = x^2y\hat{i} - 2xz\hat{j} + 2yz\hat{k}$, find $\nabla\times\vec{A}$, find curl curl $\vec{A}$.**

**Solution**

$$\nabla\times\vec{A} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ \dfrac{\partial}{\partial x} & \dfrac{\partial}{\partial y} & \dfrac{\partial}{\partial z} \\ x^2y & -2xz & 2yz \end{vmatrix}$$

$\hat{i}:\quad \dfrac{\partial(2yz)}{\partial y} - \dfrac{\partial(-2xz)}{\partial z} = 2z+2x$

$\hat{j}:\quad -\left[\dfrac{\partial(2yz)}{\partial x} - \dfrac{\partial(x^2y)}{\partial z}\right] = -[0-0] = 0$

$\hat{k}:\quad \dfrac{\partial(-2xz)}{\partial x} - \dfrac{\partial(x^2y)}{\partial y} = -2z-x^2$

$$\Rightarrow \nabla\times\vec{A} = (2x+2z)\hat{i} - (x^2+2z)\hat{k}$$

Now curl curl $\vec{A}$:

$$\nabla\times[(2x+2z)\hat{i} + 0\hat{j} - (x^2+2z)\hat{k}] = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ \dfrac{\partial}{\partial x} & \dfrac{\partial}{\partial y} & \dfrac{\partial}{\partial z} \\ 2x+2z & 0 & -(x^2+2z) \end{vmatrix}$$

$\hat{i}:\quad \dfrac{\partial(-(x^2+2z))}{\partial y} - \dfrac{\partial(0)}{\partial z} = 0$

$\hat{j}:\quad -\left[\dfrac{\partial(-(x^2+2z))}{\partial x} - \dfrac{\partial(2x+2z)}{\partial z}\right] = -[-2x-2] = 2(x+1)$

$\hat{k}:\quad \dfrac{\partial(0)}{\partial x} - \dfrac{\partial(2x+2z)}{\partial y} = 0$

$$\boxed{\text{curl curl }\vec{A} = 2(x+1)\hat{j}}$$

---

**Q-30. If $\vec{v} = \vec{\omega}\times\vec{r}$, prove $\vec{\omega} = \dfrac{1}{2}$ curl $\vec{v}$ where $\vec{\omega}$ is a constant vector.**

**Solution**

Let $\vec{\omega} = \omega_1\hat{i}+\omega_2\hat{j}+\omega_3\hat{k}$ and $\vec{r} = x\hat{i}+y\hat{j}+z\hat{k}$

$$\vec{v} = \vec{\omega}\times\vec{r} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ \omega_1 & \omega_2 & \omega_3 \\ x & y & z \end{vmatrix}$$

$\Rightarrow \vec{v} = (\omega_2z-\omega_3y)\hat{i} + (\omega_3x-\omega_1z)\hat{j} + (\omega_1y-\omega_2x)\hat{k}$

curl $\vec{v} = \nabla\times\vec{v}$:

$\hat{i}:\quad \dfrac{\partial(\omega_1y-\omega_2x)}{\partial y} - \dfrac{\partial(\omega_3x-\omega_1z)}{\partial z} = \omega_1-(-\omega_1) = 2\omega_1$

$\hat{j}:\quad -\left[\dfrac{\partial(\omega_1y-\omega_2x)}{\partial x} - \dfrac{\partial(\omega_2z-\omega_3y)}{\partial z}\right] = -[-\omega_2-\omega_2] = 2\omega_2$

$\hat{k}:\quad \dfrac{\partial(\omega_3x-\omega_1z)}{\partial x} - \dfrac{\partial(\omega_2z-\omega_3y)}{\partial y} = \omega_3-(-\omega_3) = 2\omega_3$

$\Rightarrow$ curl $\vec{v} = 2\omega_1\hat{i}+2\omega_2\hat{j}+2\omega_3\hat{k} = 2\vec{\omega}$

$$\boxed{\therefore\ \vec{\omega} = \frac{1}{2}\text{ curl }\vec{v}} \qquad \blacksquare$$

---

**Q-32. Find $a, b, c$ so that $\vec{V} = (x+2y+az)\hat{i}+(bx-3y-z)\hat{j}+(4x+cy+2z)\hat{k}$ is irrotational.**

**Solution**

For $\vec{V}$ to be irrotational, curl $\vec{V} = \vec{0}$:

$$\nabla\times\vec{V} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ \dfrac{\partial}{\partial x} & \dfrac{\partial}{\partial y} & \dfrac{\partial}{\partial z} \\ x+2y+az & bx-3y-z & 4x+cy+2z \end{vmatrix} = \vec{0}$$

$\hat{i}:\quad \dfrac{\partial(4x+cy+2z)}{\partial y} - \dfrac{\partial(bx-3y-z)}{\partial z} = c+1 = 0$

$\Rightarrow \boxed{c = -1}$

$\hat{j}:\quad -\left[\dfrac{\partial(4x+cy+2z)}{\partial x} - \dfrac{\partial(x+2y+az)}{\partial z}\right] = -(4-a) = 0$

$\Rightarrow \boxed{a = 4}$

$\hat{k}:\quad \dfrac{\partial(bx-3y-z)}{\partial x} - \dfrac{\partial(x+2y+az)}{\partial y} = b-2 = 0$

$\Rightarrow \boxed{b = 2}$

---

**Q-42. If $\Phi = 2xz^4 - x^2y$, find $\nabla\Phi$ and $|\nabla\Phi|$ at $(2,-2,-1)$.**

**Solution**

$$\nabla\Phi = \frac{\partial\Phi}{\partial x}\hat{i}+\frac{\partial\Phi}{\partial y}\hat{j}+\frac{\partial\Phi}{\partial z}\hat{k} = (2z^4-2xy)\hat{i}+(-x^2)\hat{j}+(8xz^3)\hat{k}$$

At $(2,-2,-1)$:

$\Rightarrow [2(1)-2(2)(-2)]\hat{i}+[-(4)]\hat{j}+[8(2)(-1)]\hat{k}$

$\Rightarrow [2+8]\hat{i}-4\hat{j}-16\hat{k}$

$$\boxed{\nabla\Phi = 10\hat{i}-4\hat{j}-16\hat{k}}$$

$|\nabla\Phi| = \sqrt{(10)^2+(-4)^2+(-16)^2} = \sqrt{100+16+256} = \sqrt{372}$

$$\boxed{|\nabla\Phi| = 2\sqrt{93}}$$

---

**Q-43. If $\vec{A} = 2x^2y\hat{i}-3yz^2\hat{j}+xyz^2\hat{k}$ and $\Phi = 2z-x^2y$, find (a) $\vec{A}\cdot\nabla\Phi$ and (b) $\nabla\cdot(\Phi\vec{A})$ at $(1,0,-2)$.**

**Solution**

$$\nabla\Phi = -2xy\hat{i}-x^2\hat{j}+2\hat{k}$$

At $(1,0,-2)$: $\nabla\Phi = 0\hat{i}-\hat{j}+2\hat{k}$

$\vec{A}$ at $(1,0,-2)$: $\vec{A} = 0\hat{i}+0\hat{j}+0\hat{k} = \vec{0}$

**(a)**

$$\vec{A}\cdot\nabla\Phi = \vec{0}\cdot(0\hat{i}-\hat{j}+2\hat{k}) = \boxed{0}$$

**(b)** Using the identity $\nabla\cdot(\Phi\vec{A}) = \Phi(\nabla\cdot\vec{A})+\vec{A}\cdot\nabla\Phi$:

$\nabla\cdot\vec{A} = 4xy-3z^2+2xyz$

At $(1,0,-2)$: $\nabla\cdot\vec{A} = 0-12+0 = -12$

$\Phi$ at $(1,0,-2)$: $\Phi = 2(-2)-(1)^2(0) = -4$

$\Rightarrow \nabla\cdot(\Phi\vec{A}) = (-4)(-12)+0$

$$\boxed{\nabla\cdot(\Phi\vec{A}) = 48}$$


**Q-44:Now I have everything. Let me write the solution for Q-44.Q-44. If $F = x^2z + e^{y/x}$ and $G = 2z^2y - xy^2$, find (a) $\nabla(F+G)$ and (b) $\nabla(FG)$ at the point $(1, 0, -2)$.**

**Solution:**
We use the result $\nabla(F+G) = \nabla F + \nabla G$ and $\nabla(FG) = F\nabla G + G\nabla F$.
First, we compute $\nabla F$ and $\nabla G$ individually.

$\dfrac{\partial F}{\partial x} = 2xz - \dfrac{y}{x^2}e^{y/x}, \quad \dfrac{\partial F}{\partial y} = \dfrac{1}{x}e^{y/x}, \quad \dfrac{\partial F}{\partial z} = x^2$

At $(1, 0, -2)$:

$\dfrac{\partial F}{\partial x} = 2(1)(-2) - 0 = -4$

$\Rightarrow \dfrac{\partial F}{\partial y} = \dfrac{1}{1}e^{0} = 1$

$\Rightarrow \dfrac{\partial F}{\partial z} = (1)^2 = 1$

$\Rightarrow \nabla F = -4\hat{i} + \hat{j} + \hat{k}$

Now for $G = 2z^2y - xy^2$:

$\dfrac{\partial G}{\partial x} = -y^2, \quad \dfrac{\partial G}{\partial y} = 2z^2 - 2xy, \quad \dfrac{\partial G}{\partial z} = 4yz$

At $(1, 0, -2)$:

$\dfrac{\partial G}{\partial x} = -(0)^2 = 0$

$\Rightarrow \dfrac{\partial G}{\partial y} = 2(-2)^2 - 2(1)(0) = 8$

$\Rightarrow \dfrac{\partial G}{\partial z} = 4(0)(-2) = 0$

$\Rightarrow \nabla G = 0\hat{i} + 8\hat{j} + 0\hat{k} = 8\hat{j}$

Also, the values of $F$ and $G$ at $(1, 0, -2)$:

$F = (1)^2(-2) + e^{0/1} = -2 + 1 = -1$

$\Rightarrow G = 2(-2)^2(0) - (1)(0)^2 = 0$

**(a)**

$\nabla(F+G) = \nabla F + \nabla G$

$\Rightarrow = (-4\hat{i} + \hat{j} + \hat{k}) + (8\hat{j})$

$\Rightarrow \boxed{\nabla(F+G) = -4\hat{i} + 9\hat{j} + \hat{k}}$

**(b)**

$\nabla(FG) = F\nabla G + G\nabla F$

$\Rightarrow = (-1)(8\hat{j}) + (0)(-4\hat{i} + \hat{j} + \hat{k})$

$\Rightarrow = -8\hat{j} + \mathbf{0}$

$\Rightarrow \boxed{\nabla(FG) = -8\hat{j}}$


**Q-45.** Find $\nabla|\vec{r}|^3$.

We have $|\vec{r}| = r = \sqrt{x^2 + y^2 + z^2}$, so $|\vec{r}|^3 = r^3$.

Using the result $\nabla r^n = nr^{n-2}\vec{r}$ with $n = 3$:

$\nabla r^3 = 3r^{3-2}\vec{r}$

$\Rightarrow = 3r\vec{r}$

$\Rightarrow \boxed{\nabla|\vec{r}|^3 = 3r\vec{r}}$


**Q-62. Find the directional derivative of $\phi = 4xz^3 - 3x^2y^2z$ at $(2, -1, 2)$ in the direction $2\hat{i} - 3\hat{j} + 6\hat{k}$.**

$\nabla\phi = \left(\frac{\partial\phi}{\partial x}\right)\hat{i} + \left(\frac{\partial\phi}{\partial y}\right)\hat{j} + \left(\frac{\partial\phi}{\partial z}\right)\hat{k}$

$\frac{\partial\phi}{\partial x} = 4z^3 - 6xy^2z, \quad \frac{\partial\phi}{\partial y} = -6x^2yz, \quad \frac{\partial\phi}{\partial z} = 12xz^2 - 3x^2y^2$

At $(2, -1, 2)$:

$\frac{\partial\phi}{\partial x} = 4(2)^3 - 6(2)(-1)^2(2) = 32 - 24 = 8$

$\Rightarrow \frac{\partial\phi}{\partial y} = -6(2)^2(-1)(2) = 48$

$\Rightarrow \frac{\partial\phi}{\partial z} = 12(2)(2)^2 - 3(2)^2(-1)^2 = 96 - 12 = 84$

$\Rightarrow \nabla\phi = 8\hat{i} + 48\hat{j} + 84\hat{k}$

The unit vector in the direction of $2\hat{i} - 3\hat{j} + 6\hat{k}$:

$|\vec{a}| = \sqrt{(2)^2 + (-3)^2 + (6)^2} = \sqrt{4 + 9 + 36} = \sqrt{49} = 7$

$\Rightarrow \hat{a} = \frac{2\hat{i} - 3\hat{j} + 6\hat{k}}{7}$

The directional derivative is:

$\nabla\phi \cdot \hat{a} = (8\hat{i} + 48\hat{j} + 84\hat{k}) \cdot \frac{1}{7}(2\hat{i} - 3\hat{j} + 6\hat{k})$

$\Rightarrow = \frac{1}{7}[(8)(2) + (48)(-3) + (84)(6)]$

$\Rightarrow = \frac{1}{7}[16 - 144 + 504]$

$\Rightarrow = \frac{376}{7}$

$\Rightarrow \boxed{\nabla\phi \cdot \hat{a} = \frac{376}{7}}$


**Q-63. Find the directional derivative of $P = 4e^{2x-y+z}$ at the point $(1, 1, -1)$ in a direction toward the point $(-3, 5, 6)$.**

$\nabla P = \frac{\partial P}{\partial x}\hat{i} + \frac{\partial P}{\partial y}\hat{j} + \frac{\partial P}{\partial z}\hat{k}$

$\frac{\partial P}{\partial x} = 8e^{2x-y+z}, \quad \frac{\partial P}{\partial y} = -4e^{2x-y+z}, \quad \frac{\partial P}{\partial z} = 4e^{2x-y+z}$

At $(1, 1, -1)$, the exponent is $2(1) - 1 + (-1) = 0$, so $e^0 = 1$:

$\frac{\partial P}{\partial x} = 8$

$\Rightarrow \frac{\partial P}{\partial y} = -4$

$\Rightarrow \frac{\partial P}{\partial z} = 4$

$\Rightarrow \nabla P = 8\hat{i} - 4\hat{j} + 4\hat{k}$

The direction from $(1, 1, -1)$ toward $(-3, 5, 6)$ is:

$\vec{d} = (-3-1)\hat{i} + (5-1)\hat{j} + (6-(-1))\hat{k} = -4\hat{i} + 4\hat{j} + 7\hat{k}$

$|\vec{d}| = \sqrt{(-4)^2 + (4)^2 + (7)^2} = \sqrt{16 + 16 + 49} = \sqrt{81} = 9$

$\Rightarrow \hat{d} = \frac{-4\hat{i} + 4\hat{j} + 7\hat{k}}{9}$

The directional derivative is:

$\nabla P \cdot \hat{d} = (8\hat{i} - 4\hat{j} + 4\hat{k}) \cdot \frac{1}{9}(-4\hat{i} + 4\hat{j} + 7\hat{k})$

$\Rightarrow = \frac{1}{9}[(8)(-4) + (-4)(4) + (4)(7)]$

$\Rightarrow = \frac{1}{9}[-32 - 16 + 28]$

$\Rightarrow = \frac{-20}{9}$

$\Rightarrow \boxed{\nabla P \cdot \hat{d} = -\frac{20}{9}}$

Since this is negative, $P$ is decreasing in this direction.



**Q-65. Find the values of the constants $a, b, c$ so that the directional derivative of $\phi = axy^2 + byz + cz^2x^3$ at $(1, 2, -1)$ has a maximum of magnitude $64$ in a direction parallel to the $z$-axis.**

$\nabla\phi = \frac{\partial\phi}{\partial x}\hat{i} + \frac{\partial\phi}{\partial y}\hat{j} + \frac{\partial\phi}{\partial z}\hat{k}$

$\frac{\partial\phi}{\partial x} = ay^2 + 3cz^2x^2, \quad \frac{\partial\phi}{\partial y} = 2axy + bz, \quad \frac{\partial\phi}{\partial z} = by + 2czx^3$

At $(1, 2, -1)$:

$\frac{\partial\phi}{\partial x} = a(2)^2 + 3c(-1)^2(1)^2 = 4a + 3c$

$\Rightarrow \frac{\partial\phi}{\partial y} = 2a(1)(2) + b(-1) = 4a - b$

$\Rightarrow \frac{\partial\phi}{\partial z} = b(2) + 2c(-1)(1)^3 = 2b - 2c$

$\Rightarrow \nabla\phi = (4a+3c)\hat{i} + (4a-b)\hat{j} + (2b-2c)\hat{k}$

The maximum directional derivative occurs in the direction of $\nabla\phi$ and its magnitude is $|\nabla\phi|$.

Since the maximum is in a direction parallel to the $z$-axis, $\nabla\phi$ must be parallel to $\hat{k}$, meaning the $\hat{i}$ and $\hat{j}$ components must be zero:

$4a + 3c = 0 \quad \cdots (1)$

$\Rightarrow 4a - b = 0 \quad \cdots (2)$

The magnitude of the maximum directional derivative equals $64$:

$|2b - 2c| = 64$

$\Rightarrow 2b - 2c = 64$

$\Rightarrow b - c = 32 \quad \cdots (3)$

From $(1)$: $c = -\dfrac{4a}{3}$

Substituting into $(2)$: $b = 4a$

Substituting into $(3)$:

$4a - \left(-\frac{4a}{3}\right) = 32$

$\Rightarrow 4a + \frac{4a}{3} = 32$

$\Rightarrow \frac{12a + 4a}{3} = 32$

$\Rightarrow \frac{16a}{3} = 32$

$\Rightarrow a = 6$

$\Rightarrow b = 4(6) = 24$

$\Rightarrow c = -\frac{4(6)}{3} = -8$

$\Rightarrow \boxed{a = 6, \quad b = 24, \quad c = -8}$

---

**Q-66. Find the acute angle between the surfaces $xy^2z = 3x + z^2$ and $3x^2 - y^2 + 2z = 1$ at the point $(1, -2, 1)$.**

The angle between two surfaces at a point is the angle between their normals at that point.

Let $\phi_1 = xy^2z - 3x - z^2$ and $\phi_2 = 3x^2 - y^2 + 2z$.

$\nabla\phi_1 = \frac{\partial\phi_1}{\partial x}\hat{i} + \frac{\partial\phi_1}{\partial y}\hat{j} + \frac{\partial\phi_1}{\partial z}\hat{k}$

$\frac{\partial\phi_1}{\partial x} = y^2z - 3, \quad \frac{\partial\phi_1}{\partial y} = 2xyz, \quad \frac{\partial\phi_1}{\partial z} = xy^2 - 2z$

At $(1, -2, 1)$:

$\frac{\partial\phi_1}{\partial x} = (-2)^2(1) - 3 = 4 - 3 = 1$

$\Rightarrow \frac{\partial\phi_1}{\partial y} = 2(1)(-2)(1) = -4$

$\Rightarrow \frac{\partial\phi_1}{\partial z} = (1)(-2)^2 - 2(1) = 4 - 2 = 2$

$\Rightarrow \nabla\phi_1 = \hat{i} - 4\hat{j} + 2\hat{k}$

$\nabla\phi_2 = \frac{\partial\phi_2}{\partial x}\hat{i} + \frac{\partial\phi_2}{\partial y}\hat{j} + \frac{\partial\phi_2}{\partial z}\hat{k}$

$\frac{\partial\phi_2}{\partial x} = 6x, \quad \frac{\partial\phi_2}{\partial y} = -2y, \quad \frac{\partial\phi_2}{\partial z} = 2$

At $(1, -2, 1)$:

$\frac{\partial\phi_2}{\partial x} = 6(1) = 6$

$\Rightarrow \frac{\partial\phi_2}{\partial y} = -2(-2) = 4$

$\Rightarrow \frac{\partial\phi_2}{\partial z} = 2$

$\Rightarrow \nabla\phi_2 = 6\hat{i} + 4\hat{j} + 2\hat{k}$

Now applying:

$\nabla\phi_1 \cdot \nabla\phi_2 = |\nabla\phi_1||\nabla\phi_2|\cos\theta$

$\nabla\phi_1 \cdot \nabla\phi_2 = (1)(6) + (-4)(4) + (2)(2) = 6 - 16 + 4 = -6$

$|\nabla\phi_1| = \sqrt{(1)^2 + (-4)^2 + (2)^2} = \sqrt{1 + 16 + 4} = \sqrt{21}$

$\Rightarrow |\nabla\phi_2| = \sqrt{(6)^2 + (4)^2 + (2)^2} = \sqrt{36 + 16 + 4} = \sqrt{56}$

$\cos\theta = \frac{-6}{\sqrt{21} \cdot \sqrt{56}} = \frac{-6}{\sqrt{1176}} = \frac{-6}{14\sqrt{6}} = \frac{-3}{7\sqrt{6}}$

Since we need the **acute** angle, we take the absolute value:

$\cos\theta = \frac{3}{7\sqrt{6}}$

$\Rightarrow \boxed{\theta = \arccos\left(\frac{3}{7\sqrt{6}}\right) \approx 79°55'}$



**Q-70.** If $\vec{A} = 3xyz^2\,\hat{i} + 2xy^3\,\hat{j} - xyz\,\hat{k}$ and $\Phi = 3x^2 - yz$, find (a) $\nabla \cdot \vec{A}$, (b) $\vec{A} \cdot \nabla\Phi$, (c) $\nabla \cdot (\Phi \vec{A})$, (d) $\nabla(\nabla \cdot \Phi)$ at the point $(1,-1,1)$.

**(a)**

$$\nabla \cdot \vec{A} = \frac{\partial}{\partial x}(3xyz^2) + \frac{\partial}{\partial y}(2xy^3) + \frac{\partial}{\partial z}(-xyz)$$

$\Rightarrow 3yz^2 + 6xy^2 - xy$

$\Rightarrow 3(-1)(1)^2 + 6(1)(-1)^2 - (1)(-1) \quad \text{at } (1,-1,1)$

$\Rightarrow -3 + 6 + 1 = \mathbf{4}$

**(b)**

$$\nabla\Phi = \frac{\partial\Phi}{\partial x}\hat{i} + \frac{\partial\Phi}{\partial y}\hat{j} + \frac{\partial\Phi}{\partial z}\hat{k} = 6x\,\hat{i} - z\,\hat{j} - y\,\hat{k}$$

$\Rightarrow \nabla\Phi \text{ at } (1,-1,1) = 6\hat{i} - \hat{j} + \hat{k}$

$$\vec{A} \cdot \nabla\Phi = (3xyz^2)(6x) + (2xy^3)(-z) + (-xyz)(-y)$$

$\Rightarrow 18x^2yz^2 - 2xy^3z + xy^2z$

$\Rightarrow 18(1)^2(-1)(1)^2 - 2(1)(-1)^3(1) + (1)(-1)^2(1) \quad \text{at } (1,-1,1)$

$\Rightarrow -18 + 2 + 1 = \mathbf{-15}$

**(c)**

Using the identity $\nabla \cdot (\Phi\vec{A}) = (\nabla\Phi) \cdot \vec{A} + \Phi(\nabla \cdot \vec{A})$

At $(1,-1,1)$: $\Phi = 3(1)^2 - (-1)(1) = 3 + 1 = 4$

$\Rightarrow \nabla\Phi \cdot \vec{A}$ at $(1,-1,1)$:

$$\vec{A}\text{ at }(1,-1,1) = 3(1)(-1)(1)\hat{i} + 2(1)(-1)^3\hat{j} - (1)(-1)(1)\hat{k} = -3\hat{i} - 2\hat{j} + \hat{k}$$

$\Rightarrow (\nabla\Phi)\cdot\vec{A} = (6)(-3) + (-1)(-2) + (1)(1) = -18 + 2 + 1 = -15$

$\Rightarrow \nabla \cdot (\Phi\vec{A}) = -15 + (4)(4) = -15 + 16 = \mathbf{1}$

**(d)**

$\nabla \cdot \Phi$ has no meaning since $\Phi$ is a scalar, so $\nabla(\nabla \cdot \Phi)$ is interpreted as $\nabla^2\Phi$ with gradient applied — actually $\nabla(\nabla \cdot \Phi)$ is undefined; the intended expression from the book context is $\nabla^2\Phi$:

$$\nabla^2\Phi = \frac{\partial^2}{\partial x^2}(3x^2 - yz) + \frac{\partial^2}{\partial y^2}(3x^2 - yz) + \frac{\partial^2}{\partial z^2}(3x^2 - yz)$$

$\Rightarrow 6 + 0 + 0 = \mathbf{6}$

---

**Q-71.** Evaluate $\nabla \cdot (2x^2z\,\hat{i} - xy^2z\,\hat{j} + 3yz^2\,\hat{k})$.

$$\nabla \cdot \vec{A} = \frac{\partial}{\partial x}(2x^2z) + \frac{\partial}{\partial y}(-xy^2z) + \frac{\partial}{\partial z}(3yz^2)$$

$\Rightarrow 4xz - 2xyz + 6yz$

---

**Q-72.** If $\Phi = 3x^2z - y^2z^3 + 4x^3y + 2x - 3y - 5$, find $\nabla^2\Phi$.

$$\frac{\partial\Phi}{\partial x} = 6xz + 12x^2y + 2 \qquad \Rightarrow \qquad \frac{\partial^2\Phi}{\partial x^2} = 6z + 24xy$$

$$\frac{\partial\Phi}{\partial y} = -2yz^3 + 4x^3 - 3 \qquad \Rightarrow \qquad \frac{\partial^2\Phi}{\partial y^2} = -2z^3$$

$$\frac{\partial\Phi}{\partial z} = 3x^2 - 3y^2z^2 \qquad \Rightarrow \qquad \frac{\partial^2\Phi}{\partial z^2} = -6y^2z$$

$$\nabla^2\Phi = \frac{\partial^2\Phi}{\partial x^2} + \frac{\partial^2\Phi}{\partial y^2} + \frac{\partial^2\Phi}{\partial z^2}$$

$\Rightarrow (6z + 24xy) + (-2z^3) + (-6y^2z)$

$\Rightarrow \mathbf{6z + 24xy - 2z^3 - 6y^2z}$

---

**Q-75.** If $\vec{F} = (3x^2y - z)\,\hat{i} + (xz^3 + y^4)\,\hat{j} - 2x^3z^2\,\hat{k}$, find $\nabla(\nabla \cdot \vec{F})$ at the point $(2,-1,0)$.

First compute $\nabla \cdot \vec{F}$:

$$\nabla \cdot \vec{F} = \frac{\partial}{\partial x}(3x^2y - z) + \frac{\partial}{\partial y}(xz^3 + y^4) + \frac{\partial}{\partial z}(-2x^3z^2)$$

$\Rightarrow 6xy + 4y^3 - 4x^3z$

Now compute $\nabla(\nabla \cdot \vec{F})$:

$$\frac{\partial}{\partial x}(6xy + 4y^3 - 4x^3z) = 6y - 12x^2z$$

$$\frac{\partial}{\partial y}(6xy + 4y^3 - 4x^3z) = 6x + 12y^2$$

$$\frac{\partial}{\partial z}(6xy + 4y^3 - 4x^3z) = -4x^3$$

$$\nabla(\nabla \cdot \vec{F}) = (6y - 12x^2z)\,\hat{i} + (6x + 12y^2)\,\hat{j} + (-4x^3)\,\hat{k}$$

At $(2,-1,0)$:

$\Rightarrow (6(-1) - 12(4)(0))\,\hat{i} + (6(2) + 12(1))\,\hat{j} + (-4(8))\,\hat{k}$

$\Rightarrow -6\,\hat{i} + 24\,\hat{j} - 32\,\hat{k}$

$\Rightarrow \mathbf{-6\hat{i} + 24\hat{j} - 32\hat{k}}$

---

**Q-76.** If $\vec{\omega}$ is a constant vector and $\vec{V} = \vec{\omega} \times \vec{r}$, prove that $\text{div}\,\vec{V} = 0$.

Let $\vec{\omega} = \omega_1\hat{i} + \omega_2\hat{j} + \omega_3\hat{k}$ where $\omega_1, \omega_2, \omega_3$ are constants, and $\vec{r} = x\hat{i} + y\hat{j} + z\hat{k}$.

$$\vec{V} = \vec{\omega} \times \vec{r} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ \omega_1 & \omega_2 & \omega_3 \\ x & y & z \end{vmatrix}$$

$\Rightarrow (\omega_2 z - \omega_3 y)\,\hat{i} - (\omega_1 z - \omega_3 x)\,\hat{j} + (\omega_1 y - \omega_2 x)\,\hat{k}$

$$\nabla \cdot \vec{V} = \frac{\partial}{\partial x}(\omega_2 z - \omega_3 y) + \frac{\partial}{\partial y}(-\omega_1 z + \omega_3 x) + \frac{\partial}{\partial z}(\omega_1 y - \omega_2 x)$$

$\Rightarrow 0 + 0 + 0 = 0$

Since each partial derivative is zero (as $\omega_1, \omega_2, \omega_3$ are constants and each component of $\vec{V}$ is independent of the corresponding variable), we conclude:

$$\therefore \quad \text{div}\,\vec{V} = \nabla \cdot \vec{V} = 0 \qquad \blacksquare$$

**Question Q-84: Prove that the vector $\vec{A} = 3y^4z^2\hat{i} + 4x^3z^2\hat{j} - 3x^2y^2\hat{k}$ is solenoidal.**

**Solution:**

A vector is solenoidal if $\nabla \cdot \vec{A} = 0$.

$$\nabla \cdot \vec{A} = \frac{\partial}{\partial x}(3y^4z^2) + \frac{\partial}{\partial y}(4x^3z^2) + \frac{\partial}{\partial z}(-3x^2y^2)$$

$\Rightarrow 0 + 0 + 0 = 0$

Since $\nabla \cdot \vec{A} = 0$, $\vec{A}$ is solenoidal. $\blacksquare$

Question Q-85: Show that $\vec{A} = (2x^2+8xy^2)\hat{i}+(3x^3y-3xy)\hat{j}-(4y^2z^2+2x^3z)\hat{k}$ is not solenoidal.

**Solution:**

$$\nabla \cdot \vec{A} = \frac{\partial}{\partial x}(2x^2+8xy^2) + \frac{\partial}{\partial y}(3x^3y-3xy) + \frac{\partial}{\partial z}(-(4y^2z^2+2x^3z))$$

$\Rightarrow (4x+8y^2) + (3x^3-3x) + (-8y^2z-2x^3)$

$\Rightarrow 4x + 8y^2 + 3x^3 - 3x - 8y^2z - 2x^3$

$\Rightarrow x + x^3 + 8y^2 - 8y^2z \neq 0$

Since $\nabla \cdot \vec{A} \neq 0$, $\vec{A}$ is **not** solenoidal. $\blacksquare$

Question Q-102: Show that $\vec{A} = (6xy+z^3)\hat{i}+(3x^2-z)\hat{j}+(3xz^2-y)\hat{k}$ is irrotational and find $\Phi$ such that $\vec{A} = \nabla\Phi$.

**Solution:**

$$\nabla \times \vec{A} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ \dfrac{\partial}{\partial x} & \dfrac{\partial}{\partial y} & \dfrac{\partial}{\partial z} \\ 6xy+z^3 & 3x^2-z & 3xz^2-y \end{vmatrix}$$

$\hat{i}:\ \dfrac{\partial(3xz^2-y)}{\partial y} - \dfrac{\partial(3x^2-z)}{\partial z} = -1-(-1) = 0$

$\hat{j}:\ -\left[\dfrac{\partial(3xz^2-y)}{\partial x} - \dfrac{\partial(6xy+z^3)}{\partial z}\right] = -[3z^2-3z^2] = 0$

$\hat{k}:\ \dfrac{\partial(3x^2-z)}{\partial x} - \dfrac{\partial(6xy+z^3)}{\partial y} = 6x-6x = 0$

$\Rightarrow \nabla \times \vec{A} = \vec{0}$, so $\vec{A}$ is irrotational. $\blacksquare$

Since $\nabla\Phi = \vec{A}$, we have $\dfrac{\partial\Phi}{\partial x} = 6xy+z^3$

$\Rightarrow \Phi = 3x^2y+xz^3+f(y,z) \quad \cdots (1)$

$\dfrac{\partial\Phi}{\partial y} = 3x^2+\dfrac{\partial f}{\partial y} = 3x^2-z$

$\Rightarrow \dfrac{\partial f}{\partial y} = -z$

$\Rightarrow f = -yz+g(z) \quad \cdots (2)$

Substituting $(2)$ into $(1)$:

$\Rightarrow \Phi = 3x^2y+xz^3-yz+g(z)$

$\dfrac{\partial\Phi}{\partial z} = 3xz^2-y+g'(z) = 3xz^2-y$

$\Rightarrow g'(z) = 0 \Rightarrow g(z) = C$

$$\boxed{\Phi = 3x^2y+xz^3-yz+C}$$


### **Chapter 5**

**Question Q-1 : If $\vec{R}(t) = (t-t^2)\hat{i}+2t^3\hat{j}-3\hat{k}$, find (a) $\dfrac{d\vec{R}}{dt}$, (b) $\displaystyle\int_0^1\vec{R}\,dt$.**
**Solution:**

**(a)**

$\dfrac{d\vec{R}}{dt} = \dfrac{d}{dt}(t-t^2)\hat{i}+\dfrac{d}{dt}(2t^3)\hat{j}+\dfrac{d}{dt}(-3)\hat{k}$

$\Rightarrow \dfrac{d\vec{R}}{dt} = (1-2t)\hat{i}+6t^2\hat{j}$

**(b)**

$\displaystyle\int_0^1\vec{R}\,dt = \int_0^1(t-t^2)\,dt\;\hat{i}+\int_0^1 2t^3\,dt\;\hat{j}+\int_0^1(-3)\,dt\;\hat{k}$

$\Rightarrow \left[\dfrac{t^2}{2}-\dfrac{t^3}{3}\right]_0^1\hat{i}+\left[\dfrac{t^4}{2}\right]_0^1\hat{j}+\left[-3t\right]_0^1\hat{k}$

$\Rightarrow \left(\dfrac{1}{2}-\dfrac{1}{3}\right)\hat{i}+\dfrac{1}{2}\hat{j}-3\hat{k}$

$$\boxed{\int_0^1\vec{R}\,dt = \dfrac{1}{6}\hat{i}+\dfrac{1}{2}\hat{j}-3\hat{k}}$$

**Question Q-4 (Chapter 5): If $\vec{A} = (3x^2+6y)\hat{i}-14yz\hat{j}+20xz^2\hat{k}$, evaluate $\displaystyle\int_C\vec{A}\cdot d\vec{r}$ from $(0,0,0)$ to $(1,1,1)$ along (a) $x=t,\ y=t^2,\ z=t^3$, (b) straight lines from $(0,0,0)\to(1,0,0)\to(1,1,0)\to(1,1,1)$, (c) straight line joining $(0,0,0)$ and $(1,1,1)$.**

**Solution:**

**(a)** $x=t,\ y=t^2,\ z=t^3$, $t: 0\to1$,\ so $dx=dt,\ dy=2t\,dt,\ dz=3t^2\,dt$

$\vec{A} = (3t^2+6t^2)\hat{i}-14t^5\hat{j}+20t^7\hat{k} = 9t^2\hat{i}-14t^5\hat{j}+20t^7\hat{k}$

$\vec{A}\cdot d\vec{r} = 9t^2\,dt+(-14t^5)(2t\,dt)+(20t^7)(3t^2\,dt)$

$\Rightarrow (9t^2-28t^6+60t^9)\,dt$

$\Rightarrow \displaystyle\int_0^1 = \left[3t^3-4t^7+6t^{10}\right]_0^1 = 3-4+6$

$\boxed{= 5}$

**(b)** Segment $(0,0,0)\to(1,0,0)$: $y=0,\ z=0,\ dy=dz=0$

$\displaystyle\int = \int_0^1 3x^2\,dx = [x^3]_0^1 = 1$

Segment $(1,0,0)\to(1,1,0)$: $x=1,\ z=0,\ dx=dz=0$

$\displaystyle\int = \int_0^1(-14y\cdot0)\,dy = 0$

Segment $(1,1,0)\to(1,1,1)$: $x=1,\ y=1,\ dx=dy=0$

$\displaystyle\int = \int_0^1 20z^2\,dz = \left[\dfrac{20z^3}{3}\right]_0^1 = \dfrac{20}{3}$

$\Rightarrow$ Total $= 1+0+\dfrac{20}{3}$

$\boxed{= \dfrac{23}{3}}$

**(c)** Straight line: $x=t,\ y=t,\ z=t$,\ $t: 0\to1$,\ $dx=dy=dz=dt$

$\vec{A}\cdot d\vec{r} = (3t^2+6t)\,dt+(-14t^2)\,dt+(20t^3)\,dt$

$\Rightarrow (20t^3-11t^2+6t)\,dt$

$\Rightarrow \displaystyle\int_0^1 = \left[5t^4-\dfrac{11t^3}{3}+3t^2\right]_0^1 = 5-\dfrac{11}{3}+3 = 8-\dfrac{11}{3}$

$\boxed{= \dfrac{13}{3}}$

**Question Q-6 (Chapter 5): Find the total work done in moving a particle in a force field given by $\vec{F} = 3xy\hat{i} - 5z\hat{j} + 10x\hat{k}$ along the curve $x = t^2+1,\ y = 2t^2,\ z = t^3$ from $t=0$ to $t=2$.**

**Solution:**

Work done $= \displaystyle\int_C \vec{F}\cdot d\vec{r} = \int_C F_x\,dx + F_y\,dy + F_z\,dz$

From the parametric equations:

$dx = 2t\,dt, \qquad dy = 4t\,dt, \qquad dz = 3t^2\,dt$

Substituting $x,\ y,\ z$:

$F_x = 3xy = 3(t^2+1)(2t^2) = 6t^2(t^2+1)$

$F_y = -5z = -5t^3$

$F_z = 10x = 10(t^2+1)$

$\vec{F}\cdot d\vec{r} = 6t^2(t^2+1)\cdot2t\,dt + (-5t^3)\cdot4t\,dt + 10(t^2+1)\cdot3t^2\,dt$

$\Rightarrow [12t^3(t^2+1) - 20t^4 + 30t^2(t^2+1)]\,dt$

$\Rightarrow [12t^5+12t^3-20t^4+30t^4+30t^2]\,dt$

$\Rightarrow [12t^5+10t^4+12t^3+30t^2]\,dt$

$\displaystyle\int_0^2\vec{F}\cdot d\vec{r} = \int_0^2(12t^5+10t^4+12t^3+30t^2)\,dt$

$\Rightarrow \left[2t^6+2t^5+3t^4+10t^3\right]_0^2$

$\Rightarrow 2(64)+2(32)+3(16)+10(8)$

$\Rightarrow 128+64+48+80$

$\boxed{= 320}$


**Question Q-8 (Chapter 5): If $\vec{F} = 3xy\hat{i} - y^2\hat{j}$, evaluate $\displaystyle\int_C \vec{F}\cdot d\vec{r}$ where $C$ is the curve in the $xy$ plane $y = 2x^2$, from $(0,0)$ to $(1,2)$.**

**Solution:**

$\vec{F}\cdot d\vec{r} = F_x\,dx + F_y\,dy = 3xy\,dx - y^2\,dy$

Since $y = 2x^2$, we have $dy = 4x\,dx$, and $x$ goes from $0$ to $1$.

Substituting $y = 2x^2$ and $dy = 4x\,dx$:

$\vec{F}\cdot d\vec{r} = 3x(2x^2)\,dx - (2x^2)^2\cdot4x\,dx$

$\Rightarrow 6x^3\,dx - 4x\cdot4x^4\,dx$

$\Rightarrow 6x^3\,dx - 16x^5\,dx$

$\Rightarrow (6x^3 - 16x^5)\,dx$

$\displaystyle\int_C \vec{F}\cdot d\vec{r} = \int_0^1(6x^3-16x^5)\,dx$

$\Rightarrow \left[\dfrac{6x^4}{4} - \dfrac{16x^6}{6}\right]_0^1$

$\Rightarrow \left[\dfrac{3x^4}{2} - \dfrac{8x^6}{3}\right]_0^1$

$\Rightarrow \dfrac{3}{2} - \dfrac{8}{3}$

$\Rightarrow \dfrac{9}{6} - \dfrac{16}{6}$

$\boxed{= -\dfrac{7}{6}}$

Question Q-9 (Chapter 5): Find the work done in moving a particle once around a circle $C$ in the $xy$ plane, if the circle has center at the origin and radius 3 and if the force field is $\vec{F} = (2x-y+z)\hat{i}+(x+y-z^2)\hat{j}+(3x-2y+4z)\hat{k}$.

**Solution:**

Work done $= \displaystyle\oint_C \vec{F}\cdot d\vec{r} = \oint_C F_x\,dx + F_y\,dy + F_z\,dz$

Since $C$ is in the $xy$ plane, $z = 0$ and $dz = 0$, so:

$\vec{F}\cdot d\vec{r} = (2x-y)\,dx + (x+y)\,dy$

Parametrize the circle of radius 3:

$x = 3\cos t, \qquad y = 3\sin t, \qquad t: 0 \to 2\pi$

$\Rightarrow dx = -3\sin t\,dt, \qquad dy = 3\cos t\,dt$

Substituting:

$\Rightarrow (6\cos t - 3\sin t)(-3\sin t\,dt) + (3\cos t + 3\sin t)(3\cos t\,dt)$

$\Rightarrow [-18\sin t\cos t + 9\sin^2 t + 9\cos^2 t + 9\sin t\cos t]\,dt$

$\Rightarrow [-9\sin t\cos t + 9]\,dt$

$\Rightarrow \left[-\dfrac{9}{2}\sin 2t + 9\right]dt$

$\displaystyle\oint_C \vec{F}\cdot d\vec{r} = \int_0^{2\pi}\left[-\dfrac{9}{2}\sin 2t + 9\right]dt$

$\Rightarrow \left[\dfrac{9}{4}\cos 2t + 9t\right]_0^{2\pi}$

$\Rightarrow \left(\dfrac{9}{4}\cos 4\pi + 18\pi\right) - \left(\dfrac{9}{4}\cos 0\right)$

$\Rightarrow \left(\dfrac{9}{4} + 18\pi\right) - \dfrac{9}{4}$

$\boxed{= 18\pi}$



Question Q-9.1 (Chapter 5): If $\vec{F}$ is conservative then show that $\dfrac{\partial F_z}{\partial y} = \dfrac{\partial F_y}{\partial z}$, $\dfrac{\partial F_x}{\partial z} = \dfrac{\partial F_z}{\partial x}$ and $\dfrac{\partial F_y}{\partial x} = \dfrac{\partial F_x}{\partial y}$.

**Solution:**

Since $\vec{F}$ is conservative, there exists a scalar potential $\varphi$ such that $\vec{F} = \nabla\varphi$, which means:

$$F_x = \frac{\partial\varphi}{\partial x}, \qquad F_y = \frac{\partial\varphi}{\partial y}, \qquad F_z = \frac{\partial\varphi}{\partial z}$$

By Clairaut's theorem, mixed partial derivatives are equal, so:

$\dfrac{\partial F_z}{\partial y} = \dfrac{\partial}{\partial y}\left(\dfrac{\partial\varphi}{\partial z}\right) = \dfrac{\partial^2\varphi}{\partial y\,\partial z} = \dfrac{\partial^2\varphi}{\partial z\,\partial y} = \dfrac{\partial}{\partial z}\left(\dfrac{\partial\varphi}{\partial y}\right) = \dfrac{\partial F_y}{\partial z}$

$\dfrac{\partial F_x}{\partial z} = \dfrac{\partial^2\varphi}{\partial z\,\partial x} = \dfrac{\partial^2\varphi}{\partial x\,\partial z} = \dfrac{\partial F_z}{\partial x}$

$\dfrac{\partial F_y}{\partial x} = \dfrac{\partial^2\varphi}{\partial x\,\partial y} = \dfrac{\partial^2\varphi}{\partial y\,\partial x} = \dfrac{\partial F_x}{\partial y}$

This is equivalent to saying $\nabla\times\vec{F} = \vec{0}$, i.e. curl $\vec{F} = 0$. $\blacksquare$

Question Q-12 (Chapter 5): (a) Show that $\vec{F} = (2xy+z^3)\hat{i}+x^2\hat{j}+3xz^2\hat{k}$ is a conservative force field. (b) Find the scalar potential. (c) Find the work done in moving an object in this field from $(1,-2,1)$ to $(3,1,4)$.

**Solution:**

**(a)**

$$\nabla\times\vec{F} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ \dfrac{\partial}{\partial x} & \dfrac{\partial}{\partial y} & \dfrac{\partial}{\partial z} \\ 2xy+z^3 & x^2 & 3xz^2 \end{vmatrix}$$

$\hat{i}:\ \dfrac{\partial(3xz^2)}{\partial y} - \dfrac{\partial(x^2)}{\partial z} = 0-0 = 0$

$\hat{j}:\ -\left[\dfrac{\partial(3xz^2)}{\partial x} - \dfrac{\partial(2xy+z^3)}{\partial z}\right] = -[3z^2-3z^2] = 0$

$\hat{k}:\ \dfrac{\partial(x^2)}{\partial x} - \dfrac{\partial(2xy+z^3)}{\partial y} = 2x-2x = 0$

$\Rightarrow \nabla\times\vec{F} = \vec{0}$, so $\vec{F}$ is conservative. $\blacksquare$

**(b)**

Since $\vec{F} = \nabla\varphi$:

$\dfrac{\partial\varphi}{\partial x} = 2xy+z^3$

$\Rightarrow \varphi = x^2y+xz^3+f(y,z) \quad\cdots(1)$

$\dfrac{\partial\varphi}{\partial y} = x^2+\dfrac{\partial f}{\partial y} = x^2$

$\Rightarrow \dfrac{\partial f}{\partial y} = 0 \Rightarrow f = g(z)$

$\dfrac{\partial\varphi}{\partial z} = 3xz^2+g'(z) = 3xz^2$

$\Rightarrow g'(z) = 0 \Rightarrow g(z) = C$

$$\boxed{\varphi = x^2y+xz^3+C}$$

**(c)**

Work done $= \varphi(3,1,4)-\varphi(1,-2,1)$

$\varphi(3,1,4) = (3)^2(1)+(3)(4)^3 = 9+192 = 201$

$\varphi(1,-2,1) = (1)^2(-2)+(1)(1)^3 = -2+1 = -1$

$W = 201-(-1)$

$$\boxed{W = 202}$$

Question Q-16 (Chapter 5): If $\varphi = 2xyz^2$, $x=t^2,\ y=2t,\ z=t^3$ from $t=0$ to $t=1$, evaluate (a) $\displaystyle\int_C\varphi\,d\vec{r}$ and (b) $\displaystyle\int_C\vec{F}\cdot d\vec{r}$ where $\vec{F} = \nabla\varphi$.

**Solution:**

$d\vec{r} = dx\,\hat{i}+dy\,\hat{j}+dz\,\hat{k} = 2t\,dt\,\hat{i}+2\,dt\,\hat{j}+3t^2\,dt\,\hat{k}$

$\varphi$ along $C$: $\varphi = 2(t^2)(2t)(t^6) = 4t^9$

**(a)**

$\displaystyle\int_C\varphi\,d\vec{r} = \int_0^1 4t^9(2t\,\hat{i}+2\,\hat{j}+3t^2\,\hat{k})\,dt$

$\Rightarrow \int_0^1(8t^{10}\,\hat{i}+8t^9\,\hat{j}+12t^{11}\,\hat{k})\,dt$

$\Rightarrow \left[\dfrac{8t^{11}}{11}\hat{i}+\dfrac{8t^{10}}{10}\hat{j}+\dfrac{12t^{12}}{12}\hat{k}\right]_0^1$

$$\boxed{= \dfrac{8}{11}\hat{i}+\dfrac{4}{5}\hat{j}+\hat{k}}$$

**(b)**

$\vec{F} = \nabla\varphi = 2yz^2\,\hat{i}+2xz^2\,\hat{j}+4xyz\,\hat{k}$

Along $C$: $F_x = 2(2t)(t^6) = 4t^7,\quad F_y = 2(t^2)(t^6) = 2t^8,\quad F_z = 4(t^2)(2t)(t^3) = 8t^6$

$\vec{F}\cdot d\vec{r} = 4t^7(2t)\,dt+2t^8(2)\,dt+8t^6(3t^2)\,dt$

$\Rightarrow (8t^8+4t^8+24t^8)\,dt = 36t^8\,dt$

$\displaystyle\int_C\vec{F}\cdot d\vec{r} = \int_0^1 36t^8\,dt = \left[4t^9\right]_0^1$

$$\boxed{= 4}$$

Question Q-29: Evaluate $\displaystyle\int_0^{\pi/2}(3\sin u - 2\cos u)\,du$

**Solution:**

$$\int_0^{\pi/2}(3\sin u - 2\cos u)\,du = \Big[-3\cos u - 2\sin u\Big]_0^{\pi/2}$$

$\Rightarrow (-3\cos\frac{\pi}{2} - 2\sin\frac{\pi}{2}) - (-3\cos 0 - 2\sin 0)$

$\Rightarrow (0 - 2) - (-3 - 0)$

$\Rightarrow -2 + 3$

$$\boxed{= 1}$$

Question Q-30: If $\vec{A}(t) = (t-t^2)\hat{i} + \hat{k}$ and $\vec{B}(t) = 2t^2\hat{i} + 6t\hat{k}$, evaluate (a) $\displaystyle\int_0^1\vec{A}\cdot\vec{B}\,dt$ (b) $\displaystyle\int_0^1\vec{A}\times\vec{B}\,dt$

**Solution:**

**(a)**

$\vec{A}\cdot\vec{B} = (t-t^2)(2t^2) + (0)(0) + (1)(6t)$

$\Rightarrow 2t^3 - 2t^4 + 6t$

$\displaystyle\int_0^1\vec{A}\cdot\vec{B}\,dt = \int_0^1(2t^3-2t^4+6t)\,dt$

$\Rightarrow \left[\dfrac{t^4}{2} - \dfrac{2t^5}{5} + 3t^2\right]_0^1$

$\Rightarrow \dfrac{1}{2} - \dfrac{2}{5} + 3 = \dfrac{5}{10} - \dfrac{4}{10} + \dfrac{30}{10}$

$$\boxed{= \dfrac{31}{10}}$$

**(b)**

$$\vec{A}\times\vec{B} = \begin{vmatrix}\hat{i} & \hat{j} & \hat{k} \\ t-t^2 & 0 & 1 \\ 2t^2 & 0 & 6t\end{vmatrix}$$

$\hat{i}:\ (0)(6t)-(1)(0) = 0$

$\hat{j}:\ -[(t-t^2)(6t)-(1)(2t^2)] = -[6t^2-6t^3-2t^2] = -(4t^2-6t^3) = 6t^3-4t^2$

$\hat{k}:\ (t-t^2)(0)-(0)(2t^2) = 0$

$\Rightarrow \vec{A}\times\vec{B} = (6t^3-4t^2)\hat{j}$

$\displaystyle\int_0^1\vec{A}\times\vec{B}\,dt = \int_0^1(6t^3-4t^2)\,dt\;\hat{j}$

$\Rightarrow \left[\dfrac{3t^4}{2} - \dfrac{4t^3}{3}\right]_0^1\hat{j} = \left(\dfrac{3}{2}-\dfrac{4}{3}\right)\hat{j} = \left(\dfrac{9}{6}-\dfrac{8}{6}\right)\hat{j}$

$$\boxed{= \dfrac{1}{6}\hat{j}}$$

Question Q-37: If $\vec{A} = (2y+3)\hat{i} + xz\hat{j} + (yz-x)\hat{k}$, evaluate $\displaystyle\int_C\vec{A}\cdot d\vec{r}$ along (a) $x=2t^2,\ y=t,\ z=t^3$ from $t=0$ to $t=1$, (b) the straight lines from $(0,0,0)$ to $(0,0,1)$, then to $(0,1,1)$, then to $(2,1,1)$, (c) the straight line joining $(0,0,0)$ and $(2,1,1)$.

**Solution:**

$\vec{A}\cdot d\vec{r} = (2y+3)\,dx + xz\,dy + (yz-x)\,dz$

**(a)** $x=2t^2,\ y=t,\ z=t^3,\quad dx=4t\,dt,\ dy=dt,\ dz=3t^2\,dt$

$\Rightarrow (2t+3)(4t)\,dt + (2t^2)(t^3)\,dt + (t\cdot t^3-2t^2)(3t^2)\,dt$

$\Rightarrow (8t^2+12t)\,dt + 2t^5\,dt + (t^4-2t^2)(3t^2)\,dt$

$\Rightarrow (8t^2+12t+2t^5+3t^6-6t^4)\,dt$

$\displaystyle\int_0^1 = \left[\dfrac{3t^7}{7}+\dfrac{t^6}{3}-\dfrac{6t^5}{5}+\dfrac{8t^3}{3}+6t^2\right]_0^1$

$\Rightarrow \dfrac{3}{7}+\dfrac{1}{3}-\dfrac{6}{5}+\dfrac{8}{3}+6 = \dfrac{45+35-126+280+630}{105}$

$$\boxed{= \dfrac{864}{105} = \dfrac{288}{35}}$$

**(b)** Segment 1: $(0,0,0)\to(0,0,1)$: $x=0,\ y=0,\ dx=dy=0$

$\Rightarrow (yz-x)\,dz = (0-0)\,dz = 0 \qquad \displaystyle\int = 0$

Segment 2: $(0,0,1)\to(0,1,1)$: $x=0,\ z=1,\ dx=dz=0$

$\Rightarrow xz\,dy = 0\cdot1\,dy = 0 \qquad \displaystyle\int = 0$

Segment 3: $(0,1,1)\to(2,1,1)$: $y=1,\ z=1,\ dy=dz=0$

$\Rightarrow (2y+3)\,dx = (2+3)\,dx = 5\,dx$

$\displaystyle\int_0^2 5\,dx = 5[x]_0^2 = 10$

$\Rightarrow$ Total $= 0+0+10$

$$\boxed{= 10}$$

**(c)** Straight line: $x=2t,\ y=t,\ z=t,\ t:0\to1,\quad dx=2\,dt,\ dy=dt,\ dz=dt$

$\Rightarrow (2t+3)(2)\,dt + (2t)(t)\,dt + (t^2-2t)\,dt$

$\Rightarrow (4t+6+2t^2+t^2-2t)\,dt$

$\Rightarrow (3t^2+2t+6)\,dt$

$\displaystyle\int_0^1(3t^2+2t+6)\,dt = \Big[t^3+t^2+6t\Big]_0^1 = 1+1+6$

$$\boxed{= 8}$$

**Question Q-38: If $\vec{F} = (5xy-6x^2)\hat{i}+(2y-4x)\hat{j}$, evaluate $\displaystyle\int_C\vec{F}\cdot d\vec{r}$ along the curve $C$ in the $xy$ plane, $y = x^3$ from the point $(1,1)$ to $(2,8)$.**

**Solution:**

$\vec{F}\cdot d\vec{r} = (5xy-6x^2)\,dx + (2y-4x)\,dy$

Since $y = x^3$, we have $dy = 3x^2\,dx$, and $x: 1\to2$

Substituting $y = x^3$ and $dy = 3x^2\,dx$:

$\Rightarrow (5x\cdot x^3-6x^2)\,dx + (2x^3-4x)(3x^2)\,dx$

$\Rightarrow (5x^4-6x^2)\,dx + (6x^5-12x^3)\,dx$

$\Rightarrow (6x^5+5x^4-12x^3-6x^2)\,dx$

$\displaystyle\int_C\vec{F}\cdot d\vec{r} = \int_1^2(6x^5+5x^4-12x^3-6x^2)\,dx$

$\Rightarrow \Big[x^6+x^5-3x^4-2x^3\Big]_1^2$

$\Rightarrow (64+32-48-16)-(1+1-3-2)$

$\Rightarrow 32-(-3)$

$$\boxed{= 35}$$

**Question Q-55: If $\varphi = 2xyz^2$, evaluate $\displaystyle\int_C\varphi\,d\vec{r}$ where $C$ is: (a) $x=t,\ y=t^2,\ z=t^3$ from $t=0$ to $t=1$, (b) consists of the straight lines from $(0,0,0)$ to $(1,0,0)$, then to $(1,1,0)$, and then to $(1,1,1)$.**

**Solution:**

$\displaystyle\int_C\varphi\,d\vec{r} = \hat{i}\int_C\varphi\,dx + \hat{j}\int_C\varphi\,dy + \hat{k}\int_C\varphi\,dz$

**(a)** $dx=dt,\ dy=2t\,dt,\ dz=3t^2\,dt$, and $\varphi = 2(t)(t^2)(t^6) = 2t^9$

$\hat{i}:\quad \displaystyle\int_0^1 2t^9\,dt = \left[\dfrac{t^{10}}{5}\right]_0^1 = \dfrac{1}{5}$

$\hat{j}:\quad \displaystyle\int_0^1 2t^9\cdot2t\,dt = \int_0^1 4t^{10}\,dt = \left[\dfrac{4t^{11}}{11}\right]_0^1 = \dfrac{4}{11}$

$\hat{k}:\quad \displaystyle\int_0^1 2t^9\cdot3t^2\,dt = \int_0^1 6t^{11}\,dt = \left[\dfrac{t^{12}}{2}\right]_0^1 = \dfrac{1}{2}$

$$\boxed{= \dfrac{1}{5}\hat{i}+\dfrac{4}{11}\hat{j}+\dfrac{1}{2}\hat{k}}$$

**(b)** Segment 1: $(0,0,0)\to(1,0,0)$: $y=0,\ z=0 \Rightarrow \varphi=0$, all integrals $= 0$

Segment 2: $(1,0,0)\to(1,1,0)$: $x=1,\ z=0 \Rightarrow \varphi=0$, all integrals $= 0$

Segment 3: $(1,1,0)\to(1,1,1)$: $x=1,\ y=1,\ dx=dy=0,\ \varphi = 2z^2$

$\hat{i}: 0, \qquad \hat{j}: 0$

$\hat{k}:\quad \displaystyle\int_0^1 2z^2\,dz = \left[\dfrac{2z^3}{3}\right]_0^1 = \dfrac{2}{3}$

$\Rightarrow$ Total $= 0+0+\dfrac{2}{3}\hat{k}$

$$\boxed{= \dfrac{2}{3}\hat{k}}$$

**Question Q-56: If $\vec{F} = 2y\hat{i}-z\hat{j}+x\hat{k}$, evaluate $\displaystyle\int_C\vec{F}\cdot d\vec{r}$ along the curve $x=\cos t,\ y=\sin t,\ z=2\cos t$ from $t=0$ to $t=\pi/2$.**

**Solution:**

$dx = -\sin t\,dt, \qquad dy = \cos t\,dt, \qquad dz = -2\sin t\,dt$

$\vec{F}\cdot d\vec{r} = 2y\,dx - z\,dy + x\,dz$

$\Rightarrow 2\sin t(-\sin t)\,dt - 2\cos t(\cos t)\,dt + \cos t(-2\sin t)\,dt$

$\Rightarrow -2\sin^2 t\,dt - 2\cos^2 t\,dt - 2\sin t\cos t\,dt$

$\Rightarrow -2(\sin^2 t+\cos^2 t)\,dt - \sin 2t\,dt$

$\Rightarrow (-2-\sin 2t)\,dt$

$\displaystyle\int_C\vec{F}\cdot d\vec{r} = \int_0^{\pi/2}(-2-\sin 2t)\,dt$

$\Rightarrow \left[-2t+\dfrac{\cos 2t}{2}\right]_0^{\pi/2}$

$\Rightarrow \left(-\pi+\dfrac{\cos\pi}{2}\right)-\left(0+\dfrac{\cos 0}{2}\right)$

$\Rightarrow \left(-\pi-\dfrac{1}{2}\right)-\dfrac{1}{2}$

$$\boxed{= -(\pi+1)}$$

**Q-56.** If $\vec{F} = 2y\hat{i} - z\hat{j} + x\hat{k}$, evaluate $\int_C \vec{F} \times d\vec{r}$ along the curve $x = \cos t,\ y = \sin t,\ z = 2\cos t$ from $t = 0$ to $t = \pi/2$.

We have $d\vec{r} = dx\,\hat{i} + dy\,\hat{j} + dz\,\hat{k}$

$x = \cos t \Rightarrow dx = -\sin t\, dt$

$\Rightarrow y = \sin t \Rightarrow dy = \cos t\, dt$

$\Rightarrow z = 2\cos t \Rightarrow dz = -2\sin t\, dt$

$\Rightarrow d\vec{r} = (-\sin t\,\hat{i} + \cos t\,\hat{j} - 2\sin t\,\hat{k})\,dt$

Along the curve, $\vec{F}$ becomes:

$\vec{F} = 2\sin t\,\hat{i} - 2\cos t\,\hat{j} + \cos t\,\hat{k}$

Now we compute $\vec{F} \times d\vec{r}$:

$\vec{F} \times d\vec{r} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 2\sin t & -2\cos t & \cos t \\ -\sin t & \cos t & -2\sin t \end{vmatrix} dt$

$\hat{i}$ component: $[(-2\cos t)(-2\sin t) - (\cos t)(\cos t)] = 4\sin t\cos t - \cos^2 t$

$\Rightarrow \hat{j}$ component: $-[(2\sin t)(-2\sin t) - (\cos t)(-\sin t)] = -[-4\sin^2 t + \sin t\cos t] = 4\sin^2 t - \sin t\cos t$

$\Rightarrow \hat{k}$ component: $[(2\sin t)(\cos t) - (-2\cos t)(-\sin t)] = 2\sin t\cos t - 2\sin t\cos t = 0$

$\Rightarrow \vec{F} \times d\vec{r} = [(4\sin t\cos t - \cos^2 t)\,\hat{i} + (4\sin^2 t - \sin t\cos t)\,\hat{j} + 0\,\hat{k}]\,dt$

Now integrating from $t = 0$ to $t = \pi/2$:

$\int_C \vec{F} \times d\vec{r} = \hat{i}\int_0^{\pi/2}(4\sin t\cos t - \cos^2 t)\,dt + \hat{j}\int_0^{\pi/2}(4\sin^2 t - \sin t\cos t)\,dt$

**For the $\hat{i}$ component:**

$\int_0^{\pi/2}4\sin t\cos t\,dt = 2\int_0^{\pi/2}\sin 2t\,dt = 2\left[-\frac{\cos 2t}{2}\right]_0^{\pi/2} = [-\cos 2t]_0^{\pi/2}$

$\Rightarrow = [-\cos\pi + \cos 0] = [1 + 1] = 2$

$\int_0^{\pi/2}\cos^2 t\,dt = \int_0^{\pi/2}\frac{1+\cos 2t}{2}\,dt = \left[\frac{t}{2} + \frac{\sin 2t}{4}\right]_0^{\pi/2} = \frac{\pi}{4}$

$\Rightarrow \hat{i}$ component $= 2 - \dfrac{\pi}{4}$

**For the $\hat{j}$ component:**

$\int_0^{\pi/2}4\sin^2 t\,dt = 4\int_0^{\pi/2}\frac{1-\cos 2t}{2}\,dt = 2\left[t - \frac{\sin 2t}{2}\right]_0^{\pi/2} = 2\cdot\frac{\pi}{2} = \pi$

$\int_0^{\pi/2}\sin t\cos t\,dt = \frac{1}{2}\int_0^{\pi/2}\sin 2t\,dt = \frac{1}{2}\left[-\frac{\cos 2t}{2}\right]_0^{\pi/2} = \frac{1}{2}[1+1]\cdot\frac{1}{2} = \frac{1}{2}$

$\Rightarrow \hat{j}$ component $= \pi - \dfrac{1}{2}$

Therefore:

$$\boxed{\int_C \vec{F} \times d\vec{r} = \left(2 - \frac{\pi}{4}\right)\hat{i} + \left(\pi - \frac{1}{2}\right)\hat{j}}$$

**Q-1.** State the Divergence theorem of Gauss, Stoke's theorem, Green's theorem in the plane.

**Divergence Theorem of Gauss:**

If $V$ is the volume bounded by a closed surface $S$ and $\vec{A}$ is a vector function of position having continuous derivatives, then:

$\iint\limits_S \vec{A} \cdot d\vec{S} = \iiint\limits_V \nabla \cdot \vec{A}\ dV$

or $= \iiint\limits_V \text{div}\ \vec{A}\ dV$

where $\hat{n}$ is the outward drawn unit normal to $S$.

**Stoke's Theorem:**

If $S$ is an open two-sided surface bounded by a closed non-self-intersecting curve $C$, and if $\vec{A}$ has continuous partial derivatives, then:

$\oint_C \vec{A} \cdot d\vec{r} = \iint\limits_S (\nabla \times \vec{A}) \cdot d\vec{S}$

$\Rightarrow = \iint\limits_S (\nabla \times \vec{A}) \cdot \hat{n}\ dS$

where $\hat{n}$ is the positive unit normal to $S$ and $C$ is traversed in the positive direction.

**Green's Theorem in the Plane:**

If $R$ is a closed region in the $xy$-plane bounded by a simple closed curve $C$, and if $M$ and $N$ are continuous functions of $x$ and $y$ having continuous partial derivatives in $R$, then:

$\oint_C (M\,dx + N\,dy) = \iint\limits_R \left(\frac{\partial N}{\partial x} - \frac{\partial M}{\partial y}\right)dx\,dy$

where $C$ is traversed in the positive (counterclockwise) direction.

---

**Q-2.** Verify Green's theorem in the plane for $\displaystyle\oint_C (xy + y^2)\,dx + x^2\,dy$ where $C$ is the closed curve of the region bounded by $y = x$ and $y = x^2$.

Green's theorem states:

$\oint_C (M\,dx + N\,dy) = \iint\limits_R \left(\frac{\partial N}{\partial x} - \frac{\partial M}{\partial y}\right)dx\,dy$

Here $M = xy + y^2$, $N = x^2$.

$\frac{\partial N}{\partial x} = 2x, \quad \frac{\partial M}{\partial y} = x + 2y$

$\Rightarrow \frac{\partial N}{\partial x} - \frac{\partial M}{\partial y} = 2x - x - 2y = x - 2y$

The curves $y = x$ and $y = x^2$ intersect where $x = x^2$, i.e. $x = 0$ and $x = 1$.

In the region $R$, for $0 \leq x \leq 1$: $x^2 \leq y \leq x$.

**Right side (double integral):**

$\iint\limits_R (x - 2y)\,dx\,dy = \int_0^1\int_{x^2}^{x}(x-2y)\,dy\,dx$

$\Rightarrow = \int_0^1 \left[xy - y^2\right]_{x^2}^{x}dx$

$\Rightarrow = \int_0^1 \left[(x\cdot x - x^2) - (x\cdot x^2 - x^4)\right]dx$

$\Rightarrow = \int_0^1 \left[0 - x^3 + x^4\right]dx$

$\Rightarrow = \int_0^1 (x^4 - x^3)\,dx$

$\Rightarrow = \left[\frac{x^5}{5} - \frac{x^4}{4}\right]_0^1$

$\Rightarrow = \frac{1}{5} - \frac{1}{4} = -\frac{1}{20}$

**Left side (line integral):**

The boundary $C$ consists of two paths:

$C_1$: along $y = x^2$ from $(0,0)$ to $(1,1)$

$C_2$: along $y = x$ from $(1,1)$ to $(0,0)$

**Along $C_1$:** $y = x^2$, $dy = 2x\,dx$, $x$ from $0$ to $1$:

$\int_{C_1} = \int_0^1 [(x\cdot x^2 + x^4)\,dx + x^2\cdot 2x\,dx]$

$\Rightarrow = \int_0^1 (x^3 + x^4 + 2x^3)\,dx$

$\Rightarrow = \int_0^1 (3x^3 + x^4)\,dx$

$\Rightarrow = \left[\frac{3x^4}{4} + \frac{x^5}{5}\right]_0^1 = \frac{3}{4} + \frac{1}{5} = \frac{19}{20}$

**Along $C_2$:** $y = x$, $dy = dx$, $x$ from $1$ to $0$:

$\int_{C_2} = \int_1^0 [(x\cdot x + x^2)\,dx + x^2\,dx]$

$\Rightarrow = \int_1^0 (x^2 + x^2 + x^2)\,dx$

$\Rightarrow = \int_1^0 3x^2\,dx$

$\Rightarrow = \left[x^3\right]_1^0 = 0 - 1 = -1$

$\oint_C = \int_{C_1} + \int_{C_2} = \frac{19}{20} + (-1) = \frac{19}{20} - \frac{20}{20} = -\frac{1}{20}$

Since both sides equal $-\dfrac{1}{20}$, **Green's theorem is verified.** $\blacksquare$

---

**Q-9.** Evaluate $\displaystyle\oint_C (y - \sin x)\,dx + \cos x\,dy$, where $C$ is the triangle with vertices $O(0,0)$, $A(\pi/2, 0)$, $B(\pi/2, 1)$.

**(a) Directly:**

$C$ consists of three paths $C_1$, $C_2$, $C_3$.

**Along $C_1$:** $OA$, $y = 0$, $dy = 0$, $x$ from $0$ to $\pi/2$

$\int_{C_1} = \int_0^{\pi/2}(0 - \sin x)\,dx$

$\Rightarrow = \Big[\cos x\Big]_0^{\pi/2}$

$\Rightarrow = \cos\frac{\pi}{2} - \cos 0$

$\Rightarrow = 0 - 1 = -1$

**Along $C_2$:** $AB$, $x = \dfrac{\pi}{2}$, $dx = 0$, $y$ from $0$ to $1$

$\int_{C_2} = \int_0^1 \cos\frac{\pi}{2}\,dy$

$\Rightarrow = \int_0^1 0\,dy = 0$

**Along $C_3$:** $BO$, from $(\pi/2,\, 1)$ to $(0,\, 0)$, the line $OB$ gives $y = \dfrac{2x}{\pi}$, so $dy = \dfrac{2}{\pi}\,dx$, $x$ from $\pi/2$ to $0$

$\int_{C_3} = \int_{\pi/2}^{0}\left[\left(\frac{2x}{\pi} - \sin x\right)dx + \cos x \cdot \frac{2}{\pi}\,dx\right]$

$\Rightarrow = \int_{\pi/2}^{0}\left(\frac{2x}{\pi} - \sin x + \frac{2\cos x}{\pi}\right)dx$

$\Rightarrow = \left[\frac{x^2}{\pi} + \cos x + \frac{2\sin x}{\pi}\right]_{\pi/2}^{0}$

$\Rightarrow = \left[0 + 1 + 0\right] - \left[\frac{\pi}{4} + 0 + \frac{2}{\pi}\right]$

$\Rightarrow = 1 - \frac{\pi}{4} - \frac{2}{\pi}$

Adding all three paths:

$\oint_C = -1 + 0 + 1 - \frac{\pi}{4} - \frac{2}{\pi}$

$\Rightarrow \boxed{\oint_C = -\dfrac{\pi}{4} - \dfrac{2}{\pi}}$

**(b) By Green's Theorem:**

$\oint_C (M\,dx + N\,dy) = \iint\limits_R \left(\frac{\partial N}{\partial x} - \frac{\partial M}{\partial y}\right)dx\,dy$

Here $M = y - \sin x$, $N = \cos x$

$\frac{\partial N}{\partial x} = -\sin x$

$\Rightarrow \frac{\partial M}{\partial y} = 1$

$\Rightarrow \frac{\partial N}{\partial x} - \frac{\partial M}{\partial y} = -\sin x - 1$

The hypotenuse $OB$ has equation $y = \dfrac{2x}{\pi}$. For the region $R$: $x$ from $0$ to $\dfrac{\pi}{2}$, $y$ from $0$ to $\dfrac{2x}{\pi}$

$\iint\limits_R (-\sin x - 1)\,dx\,dy = \int_0^{\pi/2}\int_0^{2x/\pi}(-\sin x - 1)\,dy\,dx$

$\Rightarrow = \int_0^{\pi/2}(-\sin x - 1)\Big[y\Big]_0^{2x/\pi}\,dx$

$\Rightarrow = \int_0^{\pi/2}(-\sin x - 1)\cdot\frac{2x}{\pi}\,dx$

$\Rightarrow = \frac{2}{\pi}\int_0^{\pi/2}(-x\sin x - x)\,dx$

$\Rightarrow = \frac{-2}{\pi}\left[\int_0^{\pi/2}x\sin x\,dx + \int_0^{\pi/2}x\,dx\right]$

For $\displaystyle\int_0^{\pi/2} x\sin x\,dx$, using integration by parts, $u = x$, $dv = \sin x\,dx$

$\Rightarrow du = dx,\quad v = -\cos x$

$\Rightarrow = \Big[-x\cos x\Big]_0^{\pi/2} + \int_0^{\pi/2}\cos x\,dx$

$\Rightarrow = \left[-\frac{\pi}{2}\cdot 0 + 0\right] + \Big[\sin x\Big]_0^{\pi/2}$

$\Rightarrow = 0 + 1 = 1$

For $\displaystyle\int_0^{\pi/2} x\,dx = \left[\frac{x^2}{2}\right]_0^{\pi/2} = \frac{\pi^2}{8}$

Substituting back:

$= \frac{-2}{\pi}\left[1 + \frac{\pi^2}{8}\right]$

$\Rightarrow = \frac{-2}{\pi} - \frac{\pi}{4}$

$\Rightarrow \boxed{\oint_C = -\dfrac{2}{\pi} - \dfrac{\pi}{4}}$

Both results are equal, hence verified. $\blacksquare$
